
export function smoothScrollTo(target, duration = 900) {
  const start = window.scrollY;
  const end = target.getBoundingClientRect().top + start;
  const startTime = performance.now();

  function easeInOut(t) {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  }

  function scroll(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOut(progress);

    window.scrollTo(0, start + (end - start) * eased);

    if (progress < 1) requestAnimationFrame(scroll);
  }

  requestAnimationFrame(scroll);
}
