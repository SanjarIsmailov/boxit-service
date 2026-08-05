const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('#nav');
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('quoteForm').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const text = [
    'Hello BOXIT, I would like a quote.',
    '',
    `Name: ${data.get('name')}`,
    `Phone: ${data.get('phone')}`,
    `Service: ${data.get('service')}`,
    `Collection: ${data.get('pickup')}`,
    `Delivery: ${data.get('delivery')}`,
    `Date: ${data.get('date') || 'Flexible / not confirmed'}`,
    '',
    `Job details: ${data.get('details')}`
  ].join('\n');
  window.open(`https://wa.me/447949286369?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
});
