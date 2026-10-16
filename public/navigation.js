const toggles=[...document.querySelectorAll('[data-nav-toggle]')];
const backdrop=document.querySelector('[data-nav-backdrop]');
const header=document.querySelector('.site-header');
const mobileToggle=document.querySelector('.mobile-nav-toggle');
document.documentElement.classList.add('navigation-ready');
function closeNavigation(focus=false){
  const active=toggles.find(t=>t.getAttribute('aria-expanded')==='true');
  toggles.forEach(t=>{t.setAttribute('aria-expanded','false');document.getElementById(t.getAttribute('aria-controls')).hidden=true;});
  backdrop.hidden=true;
  header.classList.remove('has-submenu');
  if(focus&&active)active.focus();
}
function closeMobile(focus=false){
  mobileToggle?.setAttribute('aria-expanded','false');
  closeNavigation();
  if(focus)mobileToggle?.focus();
}
mobileToggle?.addEventListener('click',()=>{
  const open=mobileToggle.getAttribute('aria-expanded')!=='true';
  closeNavigation();
  mobileToggle.setAttribute('aria-expanded',String(open));
});
toggles.forEach(t=>t.addEventListener('click',()=>{
  const open=t.getAttribute('aria-expanded')!=='true';
  closeNavigation();
  if(open){t.setAttribute('aria-expanded','true');document.getElementById(t.getAttribute('aria-controls')).hidden=false;backdrop.hidden=false;header.classList.add('has-submenu');}
}));
document.querySelectorAll('[data-nav-close]').forEach(b=>b.addEventListener('click',()=>{
  // Return to the mobile category list when a submenu closes.
  const mobile=window.matchMedia('(max-width: 750px)').matches;
  closeNavigation(!mobile);
  if(mobile){mobileToggle?.setAttribute('aria-expanded','true');mobileToggle?.focus();}
}));
backdrop.addEventListener('click',()=>closeMobile());
document.addEventListener('keydown',e=>{
  if(e.key!=='Escape')return;
  if(toggles.some(t=>t.getAttribute('aria-expanded')==='true'))closeNavigation(true);
  else if(mobileToggle?.getAttribute('aria-expanded')==='true')closeMobile(true);
});
document.addEventListener('focusin',e=>{if(!e.target.closest('.site-header'))closeMobile();});
header.addEventListener('click',e=>{if(e.target.closest('a'))closeMobile();});
for(const a of document.querySelectorAll('.header-nav a')){if(a.getAttribute('href')===location.pathname)a.setAttribute('aria-current','page');}
window.matchMedia('(max-width: 750px)').addEventListener('change',()=>closeMobile());

document.addEventListener('pointerdown',e=>{if(!e.target.closest('.site-header'))closeMobile();});
