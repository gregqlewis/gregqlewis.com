// Mark JS as running before the body paints, so content is only hidden
// when the script that reveals it is guaranteed to run.
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach((el, i) => {
    el.style.transitionDelay = Math.min(i % 5, 4) * 60 + 'ms';
    io.observe(el);
  });
});
