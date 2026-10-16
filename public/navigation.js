const toggles=[...document.querySelectorAll('[data-nav-toggle]')];
const backdrop=document.querySelector('[data-nav-backdrop]');
function closeNavigation(focus=false){const active=toggles.find(t=>t.getAttribute('aria-expanded')==='true');toggles.forEach(t=>{t.setAttribute('aria-expanded','false');document.getElementById(t.getAttribute('aria-controls')).hidden=true;});backdrop.hidden=true;if(focus&&active)active.focus();}
toggles.forEach(t=>t.addEventListener('click',()=>{const open=t.getAttribute('aria-expanded')!=='true';closeNavigation();if(open){t.setAttribute('aria-expanded','true');document.getElementById(t.getAttribute('aria-controls')).hidden=false;backdrop.hidden=false;}}));
document.querySelectorAll('[data-nav-close]').forEach(b=>b.addEventListener('click',()=>closeNavigation(true)));
backdrop.addEventListener('click',()=>closeNavigation());
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&toggles.some(t=>t.getAttribute('aria-expanded')==='true')){closeNavigation(true);}});
document.addEventListener('focusin',e=>{if(!e.target.closest('.site-header'))closeNavigation();});
document.querySelector('.site-header').addEventListener('click',e=>{if(e.target.closest('a'))closeNavigation();});
for(const a of document.querySelectorAll('.header-nav a')){if(a.getAttribute('href')===location.pathname)a.setAttribute('aria-current','page');}
