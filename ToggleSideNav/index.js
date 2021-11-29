function isNav() {
  return window.sessionStorage.getItem('isNavActive') === 'true';
}

document.addEventListener('DOMContentLoaded', () => {
  const $toggle = document.querySelector('.toggle');
  const $nav = document.querySelector('.container > nav');
  isNav() ? $nav.classList.add('active') : $nav.classList.remove('active');
  $toggle.addEventListener('click', () => {
    window.sessionStorage.setItem('isNavActive', `${!isNav()}`);
    isNav() ? $nav.classList.add('active') : $nav.classList.remove('active');
  });
});
