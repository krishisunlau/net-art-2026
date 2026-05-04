const events = document.querySelectorAll('.event');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const questions = entry.target.querySelectorAll('.question');
      questions.forEach(q => q.classList.add('visible'));
    }
  });
}, {
  threshold: 0.2
});

events.forEach(event => observer.observe(event));


window.addEventListener('load', () => {
  const timeline = document.querySelector('.timeline');
  const eventEls = Array.from(document.querySelectorAll('.event'));
  const ticksPerGap = 5;

  for (let i = 0; i < eventEls.length - 1; i++) {
    const aRect = eventEls[i].getBoundingClientRect();
    const bRect = eventEls[i + 1].getBoundingClientRect();

    const timelineTop = timeline.getBoundingClientRect().top;
    const aCenter = (aRect.top - timelineTop) + window.scrollY + aRect.height / 2;
    const bCenter = (bRect.top - timelineTop) + window.scrollY + bRect.height / 2;

    const gap = bCenter - aCenter;

    for (let t = 1; t <= ticksPerGap; t++) {
      const tick = document.createElement('div');
      tick.classList.add('tick');
      tick.style.top = (aCenter + (gap / (ticksPerGap + 1)) * t) + 'px';
      timeline.appendChild(tick);
    }
  }
});