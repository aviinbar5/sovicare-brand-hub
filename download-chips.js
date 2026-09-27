/* Download chips — adds a PNG export button to every section and every figure.
   Injected purely at runtime: no markup changes, and the chips exclude
   themselves from the captured image. */
(function () {
  if (window.__scDownloadChips) return;
  window.__scDownloadChips = true;

  var LIB = [
    'https://cdn.jsdelivr.net/npm/html-to-image@1.11.11/dist/html-to-image.js',
    'https://unpkg.com/html-to-image@1.11.11/dist/html-to-image.js'
  ];
  var libPromise = null;
  function lib() {
    if (libPromise) return libPromise;
    libPromise = new Promise(function (resolve, reject) {
      var i = 0;
      (function next() {
        if (window.htmlToImage) return resolve(window.htmlToImage);
        if (i >= LIB.length) return reject(new Error('html-to-image failed to load'));
        var s = document.createElement('script');
        s.src = LIB[i++];
        s.onload = function () { window.htmlToImage ? resolve(window.htmlToImage) : next(); };
        s.onerror = next;
        document.head.appendChild(s);
      })();
    });
    return libPromise;
  }

  var css = document.createElement('style');
  css.textContent = [
    '[data-sc-dl]{position:absolute;z-index:40;display:inline-flex;align-items:center;gap:6px;',
    'border:0;cursor:pointer;font:600 10px/1 Inter,sans-serif;letter-spacing:.08em;',
    'text-transform:uppercase;border-radius:999px;padding:7px 12px;background:#264653;color:#F2F7F9;',
    'box-shadow:0 2px 10px rgba(38,70,83,.22);transition:opacity 140ms ease,background 140ms ease}',
    '[data-sc-dl]:hover{background:#219EBC}',
    '[data-sc-dl][data-busy="1"]{background:#7E9AA6;cursor:default}',
    'section[data-sc-host] > [data-sc-dl]{opacity:0;pointer-events:none}',
    'section[data-sc-host]:hover > [data-sc-dl]{opacity:1;pointer-events:auto}',
    'section[data-sc-host] > [data-sc-dl]:focus{opacity:1;pointer-events:auto}',
    'figure[data-sc-host]{position:relative}',
    'figure[data-sc-host] > [data-sc-dl]{top:9px;right:9px;opacity:0;padding:6px 10px;font-size:9px}',
    'figure[data-sc-host]:hover > [data-sc-dl],figure[data-sc-host] > [data-sc-dl]:focus{opacity:1}',
    '@media print{[data-sc-dl]{display:none!important}}'
  ].join('');
  document.head.appendChild(css);

  function slug(s) {
    return (s || 'sovicare').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60) || 'sovicare';
  }

  function nameFor(el) {
    if (el.tagName === 'SECTION') {
      var h = el.querySelector('h2, h1, h3');
      return 'sovicare-' + slug(el.id || (h && h.textContent));
    }
    var cap = el.querySelector('figcaption');
    var sec = el.closest('section[id]');
    return 'sovicare-' + slug((sec ? sec.id + '-' : '') + (cap ? cap.textContent : 'asset'));
  }

  function chip(label) {
    var b = document.createElement('button');
    b.setAttribute('data-sc-dl', '');
    b.type = 'button';
    b.innerHTML = '<svg viewBox="0 0 16 16" width="11" height="11" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M8 2v8M4.5 7.5 8 11l3.5-3.5M2.5 13.5h11"/></svg><span>' + label + '</span>';
    b.title = 'Download this as a PNG';
    return b;
  }

  function attach(el, label) {
    if (el.dataset.scHost) return;
    el.dataset.scHost = '1';
    var cs = getComputedStyle(el);
    if (el.tagName === 'SECTION' && cs.position === 'static') el.style.position = 'relative';
    var b = chip(label);
    if (el.tagName === 'SECTION') {
      if (parseFloat(cs.paddingTop) >= 60) { b.style.top = '30px'; b.style.right = '0'; }
      else { b.style.bottom = '8px'; b.style.right = '8px'; }
    }
    b.addEventListener('click', function (ev) {
      ev.preventDefault();
      ev.stopPropagation();
      download(el, b);
    });
    el.appendChild(b);
  }

  function download(el, btn) {
    if (btn.dataset.busy === '1') return;
    btn.dataset.busy = '1';
    var span = btn.querySelector('span');
    var was = span.textContent;
    span.textContent = 'Rendering';
    lib().then(function (h2i) {
      return h2i.toPng(el, {
        pixelRatio: 2,
        backgroundColor: getComputedStyle(el).backgroundColor === 'rgba(0, 0, 0, 0)' ? '#D6E2E9' : null,
        filter: function (node) { return !(node.dataset && node.dataset.scDl !== undefined); }
      });
    }).then(function (url) {
      var a = document.createElement('a');
      a.href = url;
      a.download = nameFor(el) + '.png';
      a.click();
      span.textContent = 'Saved';
      setTimeout(function () { span.textContent = was; btn.dataset.busy = '0'; }, 1400);
    }).catch(function (err) {
      console.warn('[download-chips]', err);
      span.textContent = 'Failed';
      setTimeout(function () { span.textContent = was; btn.dataset.busy = '0'; }, 2000);
    });
  }

  function scan() {
    document.querySelectorAll('section[id]').forEach(function (s) {
      if (s.closest('aside, nav')) return;
      attach(s, 'Download section');
    });
    document.querySelectorAll('figure').forEach(function (f) {
      if (f.querySelector('figure')) return;
      attach(f, 'PNG');
    });
  }

  var t = null;
  function queue() { clearTimeout(t); t = setTimeout(scan, 160); }
  queue();
  new MutationObserver(queue).observe(document.documentElement, { childList: true, subtree: true });
})();
