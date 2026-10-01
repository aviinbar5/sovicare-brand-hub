const menu = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  document.body.classList.toggle('menu-open', open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Open menu');
  document.body.classList.remove('menu-open');
}));

const observed = document.querySelectorAll('.reveal, .hero, .steps-layout, .why, .closing');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible', 'is-built');
      observer.unobserve(entry.target);
    });
  }, {threshold: .08, rootMargin: '0px 0px -5% 0px'});
  observed.forEach(node => observer.observe(node));
} else {
  observed.forEach(node => node.classList.add('is-visible', 'is-built'));
}

const careData = {
  longevity:{label:'LONGEVITY',title:'Live Better',copy:'Sermorelin, NAD+, and Methylene Blue for energy and healthy aging.'},
  intimacy:{label:'SEXUAL HEALTH',title:'Better Intimacy',copy:'ED and premature ejaculation care, reviewed by a licensed provider.'},
  hair:{label:'HAIR LOSS',title:'Fuller Hair',copy:'Options for men, and a shared treatment for men and women.'}
};
const careRows = [...document.querySelectorAll('.care-row')];
const careDetail = document.querySelector('#care-detail');
careRows.forEach(row => row.addEventListener('click', event => {
  event.preventDefault();
  const selected = careData[row.dataset.care];
  careRows.forEach(item => {
    const active = item === row;
    item.classList.toggle('selected', active);
    item.setAttribute('aria-expanded', String(active));
  });
  document.querySelector('#care-detail-label').textContent = selected.label;
  document.querySelector('#care-detail-title').textContent = selected.title;
  document.querySelector('#care-detail-copy').textContent = selected.copy;
  careDetail.hidden = false;
  careDetail.classList.remove('detail-enter');
  void careDetail.offsetWidth;
  careDetail.classList.add('detail-enter');
  careDetail.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'nearest'});
}));
document.querySelector('.care-detail-close').addEventListener('click', () => {
  const previous = careRows.find(row => row.classList.contains('selected'));
  careDetail.hidden = true;
  careRows.forEach(row => {row.classList.remove('selected');row.setAttribute('aria-expanded','false');});
  previous?.focus({preventScroll:true});
});

const steps = [
  {title:'Tell us what’s changed.',body:'Complete a private online assessment covering your health, symptoms, and goals.'},
  {title:'A licensed provider reviews your information.',body:'Labs may be requested when clinically appropriate.'},
  {title:'Receive a personalized care plan.',body:'If treatment is appropriate, your provider will explain the recommended options.'},
  {title:'Stay supported.',body:'Access ongoing guidance, follow-up, and adjustments based on your care plan.'}
];
const stage = document.querySelector('.step-stage');
const tabs = [...document.querySelectorAll('.step')];
function selectStep(index, moveFocus = false) {
  tabs.forEach((tab, n) => {
    const selected = n === index;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  stage.dataset.variant = String(index);
  stage.querySelector('.stage-counter').textContent = `0${index + 1} / 04`;
  stage.querySelector('h3').textContent = steps[index].title;
  stage.querySelector('p').textContent = steps[index].body;
  if (moveFocus) tabs[index].focus();
}
tabs.forEach((tab,index) => {
  tab.addEventListener('click', () => selectStep(index));
  tab.addEventListener('keydown', event => {
    if (!['ArrowRight','ArrowLeft','ArrowDown','ArrowUp','Home','End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 :
      (index + (['ArrowRight','ArrowDown'].includes(event.key) ? 1 : -1) + tabs.length) % tabs.length;
    selectStep(next, true);
  });
});

const quotes = [
  {line:'“The whole process was simple and I never felt rushed. I finally felt heard.”',image:'assets/portrait-2.png',alt:'Portrait representing a patient story'},
  {line:'“It was straightforward from the assessment to the first delivery.”',image:'assets/portrait-1.png',alt:'Portrait representing a patient story'}
];
let quoteIndex = 0;
function showQuote(offset) {
  quoteIndex = (quoteIndex + offset + quotes.length) % quotes.length;
  const quote = quotes[quoteIndex];
  document.querySelector('#voice-line').textContent = quote.line;
  const image = document.querySelector('#voice-image');
  image.src = quote.image;
  image.alt = quote.alt;
  document.querySelector('#voice-count').textContent = `0${quoteIndex + 1} / 02`;
}
document.querySelector('#voice-prev').addEventListener('click', () => showQuote(-1));
document.querySelector('#voice-next').addEventListener('click', () => showQuote(1));
