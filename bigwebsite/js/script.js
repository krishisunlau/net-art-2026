// ── Tick marks between events ──
// Event tops (px) — must match CSS nth-child tops
const eventTops = [600, 2600, 4600, 6600, 8600, 10600, 12600, 14600, 16600, 18600, 20600, 22600];
const ticksPerGap = 6; // number of small ticks between each pair of events
const timeline = document.querySelector('.timeline');

for (let i = 0; i < eventTops.length - 1; i++) {
  const from = eventTops[i] + 60; // center of bubble
  const to = eventTops[i + 1] + 60;
  const gap = to - from;

  for (let t = 1; t <= ticksPerGap; t++) {
    const tick = document.createElement('div');
    tick.classList.add('tick');
    tick.style.top = (from + (gap / (ticksPerGap + 1)) * t) + 'px';
    timeline.appendChild(tick);
  }
}

// ── Fade-in questions on scroll ──
const events = document.querySelectorAll('.event');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const questions = entry.target.querySelectorAll('.question');
      questions.forEach(q => q.classList.add('visible'));
    }
  });
}, {
  threshold: 0.3
});

events.forEach(event => observer.observe(event));