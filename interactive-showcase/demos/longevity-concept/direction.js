const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealTargets = document.querySelectorAll('.reveal, .measure, .closing');
if ('IntersectionObserver' in window && !reduceMotion) {
  const reveal = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible', 'built');
      reveal.unobserve(entry.target);
    });
  }, {threshold:.12,rootMargin:'0px 0px -24px 0px'});
  revealTargets.forEach(el => reveal.observe(el));
} else revealTargets.forEach(el => el.classList.add('visible','built'));

const menuButton=document.querySelector('.menu-toggle'), menu=document.querySelector('.primary-nav');
function closeMenu(){menu.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open menu');document.body.classList.remove('menu-open')}
menuButton.addEventListener('click',()=>{let open=!menu.classList.contains('open');menu.classList.toggle('open',open);menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close menu':'Open menu');document.body.classList.toggle('menu-open',open)});
menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
window.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});

const products={
  nad:{name:'NAD+',label:'NAD+',form:'CELLULAR METABOLISM',summary:'NAD+ is a coenzyme involved in cellular energy metabolism. Explore the available formulation, what the research tells us, and whether it may be appropriate for you.',caution:'Evidence varies by compound and how it is administered. Research on NAD+ precursors does not establish the same benefits for every NAD+ product.'},
  sermorelin:{name:'Sermorelin',label:'SERMORELIN',form:'GROWTH-HORMONE SIGNALING',summary:'Sermorelin is a peptide that stimulates growth-hormone release. A licensed provider will assess whether its use is appropriate, including any testing and monitoring needed.',caution:'Use for adult healthy-aging goals is not an FDA-approved anti-aging indication. Treatment requires an individual clinical assessment.'},
  blue:{name:'Methylene Blue',label:'METHYLENE BLUE',form:'MEDICATION ASSESSMENT',summary:'Methylene blue is a medication with specific medical uses. Any proposed use for wellness or aging requires a review of the evidence, your health history, and your current medications.',caution:'Important medication interactions and risks in people with G6PD deficiency require clinical screening.'}
};
const tabs=[...document.querySelectorAll('.option-list [role="tab"]')],panel=document.querySelector('#option-panel');let activeOption='nad';
function selectOption(key){const item=products[key];activeOption=key;tabs.forEach(tab=>tab.setAttribute('aria-selected',String(tab.dataset.option===key)));panel.dataset.active=key;panel.setAttribute('aria-labelledby',`tab-${key}`);document.querySelector('#option-type').textContent=item.form;document.querySelector('#option-name').textContent=item.name;document.querySelector('#option-summary').textContent=item.summary;document.querySelector('#vessel-label').textContent=item.label;document.querySelector('#option-caution').textContent=item.caution;document.querySelector('#choose-option').innerHTML=`Explore ${item.name} <span aria-hidden="true">↗</span>`}
tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>selectOption(tab.dataset.option));tab.addEventListener('keydown',e=>{if(!['ArrowRight','ArrowLeft','ArrowDown','ArrowUp'].includes(e.key))return;e.preventDefault();const offset=['ArrowRight','ArrowDown'].includes(e.key)?1:-1;const next=tabs[(index+offset+tabs.length)%tabs.length];next.focus();selectOption(next.dataset.option)})});

const signalButtons=[...document.querySelectorAll('.signal')];
const responses={
  energy:'Discuss fatigue and changes in how you feel throughout the day.',
  activity:'Share concerns about your activity, strength, or recovery.',
  focus:'Talk about changes in concentration and mental sharpness.',
  longterm:'Explore your questions about aging and your health priorities.'
};
signalButtons.forEach(button=>button.addEventListener('click',()=>{
  const wasSelected=button.getAttribute('aria-pressed')==='true';
  signalButtons.forEach(item=>item.setAttribute('aria-pressed','false'));
  button.setAttribute('aria-pressed',String(!wasSelected));
  document.querySelector('#signal-response-text').textContent=wasSelected
    ?'These are goals to discuss with a provider, not promised treatment results. New or persistent symptoms may require further evaluation.'
    :responses[button.dataset.signal]+' These are goals to discuss with a provider, not promised treatment results.';
}));

const pathSteps=[...document.querySelectorAll('.path-steps article')];
pathSteps.forEach(step=>step.querySelector('.path-number').addEventListener('click',()=>{
  const button=step.querySelector('.path-number');
  const open=button.getAttribute('aria-expanded')!=='true';
  pathSteps.forEach(other=>{
    other.querySelector('.path-number').setAttribute('aria-expanded','false');
    other.querySelector('.path-detail').hidden=true;
  });
  button.setAttribute('aria-expanded',String(open));
  step.querySelector('.path-detail').hidden=!open;
}));

const compareButton=document.querySelector('.compare-toggle'),comparison=document.querySelector('#comparison');
compareButton.addEventListener('click',()=>{const open=comparison.hidden;comparison.hidden=!open;compareButton.setAttribute('aria-expanded',String(open));compareButton.innerHTML=open?'Hide comparison <span aria-hidden="true">−</span>':'Compare all three <span aria-hidden="true">+</span>';if(open)comparison.scrollIntoView({block:'nearest',behavior:reduceMotion?'auto':'smooth'})});

const questions=[...document.querySelectorAll('.faq details')];questions.forEach(item=>item.addEventListener('toggle',()=>{if(item.open)questions.filter(other=>other!==item).forEach(other=>other.open=false)}));

const dialog=document.querySelector('#assessment-dialog'),selection=document.querySelector('#dialog-selection');
function showAssessment(option){selection.textContent=option?`You selected ${products[option].name} to explore. A provider decides whether any treatment is appropriate.`:'Assessment only. Not a diagnosis. No obligation.';dialog.showModal();dialog.querySelector('.dialog-close').focus()}
document.querySelector('#choose-option').addEventListener('click',()=>showAssessment(activeOption));
document.querySelector('[data-assessment]').addEventListener('click',()=>showAssessment(null));
dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.querySelector('.dialog-done').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
