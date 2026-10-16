// Progressive enhancement: content stays visible without JavaScript or motion support.
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
const header = document.querySelector('.site-header');
const progress = document.createElement('div');
progress.className = 'reading-progress';
progress.setAttribute('aria-hidden', 'true');
document.body.append(progress);
let scheduled = false;
function updateProgress() {
  scheduled = false;
  const range = document.documentElement.scrollHeight - window.innerHeight;
  const fraction = range > 0 ? Math.min(1, Math.max(0, window.scrollY / range)) : 0;
  progress.style.transform = `scaleX(${fraction})`;
  header?.classList.toggle('is-scrolled', window.scrollY > 18);
}
function scheduleProgress() {
  if (!scheduled) { scheduled = true; requestAnimationFrame(updateProgress); }
}
window.addEventListener('scroll', scheduleProgress, { passive: true });
window.addEventListener('resize', scheduleProgress, { passive: true });
updateProgress();

let observer;
if ('IntersectionObserver' in window && !motion.matches) {
  observer = new IntersectionObserver(entries => {
    for (const { target, isIntersecting } of entries) {
      if (!isIntersecting) continue;
      target.classList.remove('reveal-pending');
      observer.unobserve(target);
    }
  }, { threshold: 0.08, rootMargin: '0px 0px -16px 0px' });
  const selector = '.section-head, .editorial-lead, .platform-pillars article, .offer-item, .journey-grid>a, .spotlight-list article, .diff-row, .visibility-item, .goal-principle, .story-section, .story-card, .story-steps li, .ai-tool-band>.story-shell';
  document.querySelectorAll(selector).forEach((element, index) => {
    // Already visible content and hidden tab panels never wait for an entrance.
    const bounds = element.getBoundingClientRect();
    if (!bounds.height || bounds.top < window.innerHeight) return;
    element.classList.add('reveal-item', 'reveal-pending');
    element.style.setProperty('--reveal-delay', `${index % 3 * 55}ms`);
    observer.observe(element);
  });
}
motion.addEventListener('change', () => {
  if (!motion.matches) return;
  observer?.disconnect();
  document.querySelectorAll('.reveal-pending').forEach(element => element.classList.remove('reveal-pending'));
});
// Follow anchor navigation immediately, including programmatically focused targets.
function revealAnchor() {
  const id = decodeURIComponent(location.hash.slice(1));
  const target = document.getElementById(id);
  target?.classList.remove('reveal-pending');
  target?.querySelectorAll('.reveal-pending').forEach(element => element.classList.remove('reveal-pending'));
}
window.addEventListener('hashchange', revealAnchor);
document.addEventListener('focusin', event => {
  event.target.closest('.reveal-pending')?.classList.remove('reveal-pending');
});
revealAnchor();
