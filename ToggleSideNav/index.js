function isNav() {
  return window.sessionStorage.getItem('isNavActive') === 'true';
}
const $toggle = document.querySelector('.toggle');
const $nav = document.querySelector('.container > nav');

document.addEventListener('DOMContentLoaded', () => {
  isNav() ? $nav.classList.add('active') : $nav.classList.remove('active');

  $toggle.addEventListener('click', () => {
    window.sessionStorage.setItem('isNavActive', `${!isNav()}`);
    isNav() ? $nav.classList.add('active') : $nav.classList.remove('active');
  });
});
