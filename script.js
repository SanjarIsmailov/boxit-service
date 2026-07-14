// Sticky header on scroll
const header = document.querySelector('.site-header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu
const toggle = document.querySelector('.mobile-toggle');
const menu = document.querySelector('.mobile-menu');
toggle?.addEventListener('click', () => menu.classList.toggle('open'));
menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

// Reveal on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Staggered reveal delays
document.querySelectorAll('[data-stagger]').forEach(parent => {
  parent.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = `${i * 90}ms`;
  });
});

// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item => {
  const btn = item.querySelector('.faq-q');
  btn.addEventListener('click', () => item.classList.toggle('open'));
});

// Radio tiles
document.querySelectorAll('.radios').forEach(group => {
  const tiles = group.querySelectorAll('.radio-tile');
  tiles.forEach(t => t.addEventListener('click', () => {
    tiles.forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    t.querySelector('input').checked = true;
  }));
});

// Prevent form submit (demo)
document.querySelector('.form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you! Your BOXIT team will be in touch within one working hour.');
});
