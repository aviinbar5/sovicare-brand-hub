const menu = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');
menu.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(isOpen));
  menu.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  document.body.classList.toggle('menu-open', isOpen);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Open menu');
  document.body.classList.remove('menu-open');
}));

const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: .09}) : null;
document.querySelectorAll('.reveal').forEach(node => observer ? observer.observe(node) : node.classList.add('is-visible'));

const themeNotes = [
  'It starts with your own experience, in your own words.',
  'The details of everyday life help give the questions context.',
  'The point is a clearer decision about what comes next.'
];
document.querySelectorAll('.diagram-point').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.diagram-point').forEach(point => {
    point.classList.remove('active');
    point.setAttribute('aria-pressed', 'false');
  });
  button.classList.add('active');
  button.setAttribute('aria-pressed', 'true');
  document.querySelector('.diagram-note').textContent = themeNotes[Number(button.dataset.theme)];
}));

const steps = [
  {title:'Begin with your story.', body:'Answer a few private questions at your own pace. The details give a provider context to understand where you are starting.'},
  {title:'A careful review.', body:'A licensed provider considers what you have shared before deciding whether any treatment may be appropriate.'},
  {title:'A clearer explanation.', body:'Understand the recommendation, the options that may be relevant and what your next step could look like.'},
  {title:'Room to keep talking.', body:'Your questions can continue beyond the first decision. The final support experience will be defined before launch.'}
];
document.querySelectorAll('.step').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.step').forEach(step => {
    step.classList.remove('active');
    step.setAttribute('aria-selected', 'false');
  });
  button.classList.add('active');
  button.setAttribute('aria-selected', 'true');
  const index = Number(button.dataset.step);
  const stage = document.querySelector('.step-stage');
  stage.dataset.variant = String(index);
  stage.querySelector('.stage-counter').textContent = `0${index + 1} / 04`;
  stage.querySelector('h3').textContent = steps[index].title;
  stage.querySelector('p').textContent = steps[index].body;
}));

const perspectives = [
  {line:'Could these changes be connected?', image:'assets/portrait-2.png', alt:'Person in natural light'},
  {line:'What should I ask before making a decision?', image:'assets/portrait-0.png', alt:'Portrait in a relaxed setting'},
  {line:'Where can I start, without feeling rushed?', image:'assets/portrait-1.png', alt:'Person at home in natural light'}
];
let perspectiveIndex = 0;
function showPerspective(offset) {
  perspectiveIndex = (perspectiveIndex + offset + perspectives.length) % perspectives.length;
  const perspective = perspectives[perspectiveIndex];
  document.querySelector('#voice-line').textContent = perspective.line;
  const image = document.querySelector('#voice-image');
  image.src = perspective.image;
  image.alt = perspective.alt;
  document.querySelector('#voice-count').textContent = `0${perspectiveIndex + 1} / 03`;
}
document.querySelector('#voice-prev').addEventListener('click', () => showPerspective(-1));
document.querySelector('#voice-next').addEventListener('click', () => showPerspective(1));
