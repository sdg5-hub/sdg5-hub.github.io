const y = document.getElementById('y');
y.textContent = new Date().getFullYear();

const themeBtn = document.getElementById('theme');
const st = 'osamah-theme';

function apply(t) {
  document.documentElement.setAttribute('data-theme', t);
}

const saved = localStorage.getItem(st) || 'dark';
if (saved === 'light') apply('light');

themeBtn.addEventListener('click', () => {
  const now = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  apply(now);
  localStorage.setItem(st, now);
  themeBtn.textContent = now === 'light' ? '🌚 Theme' : '🌙 Theme';
});
