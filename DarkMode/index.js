setTimeout(() => {
  document.body.style.visibility = 'visible';
}, 300);

function toggleDarkMode(current) {
  current === 'dark' ? document.body.classList.add('dark') : document.body.classList.remove('dark');
}

let currentMode = window.localStorage.getItem('currentMode');

const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
if (darkModeMediaQuery.matches) currentMode = 'dark';

darkModeMediaQuery.addEventListener('change', e => {
  currentMode = e.matches ? 'dark' : 'light';
  toggleDarkMode(currentMode);
});

toggleDarkMode(currentMode);

const $toggleBtn = document.querySelector('.toggle-button');
$toggleBtn.addEventListener('click', () => {
  currentMode === 'dark' ? document.body.classList.remove('dark') : document.body.classList.add('dark');
  currentMode = currentMode === 'dark' ? 'light' : 'dark';
  window.localStorage.setItem('currentMode', currentMode);
});
