// 1. menu-container click 이벤트 발생할 때
// 1-1. 해당 요소만 active 클래스 추가
// 1-2. 나머지 요소 active 클래스 삭제
// 2. menu-container 에 active 클래스가 있다면 submenu 보여주기

const $accordion = document.querySelector('.accordion');
const $menuContainers = document.querySelectorAll('.menu-container');

setTimeout(() => {
  $accordion.style.opacity = 1;
}, 400);

$menuContainers.forEach($menuContainer => {
  const $subMenu = $menuContainer.lastElementChild;

  if ($menuContainer.classList.contains('active')) {
    $subMenu.style.height = `${+$subMenu.scrollHeight}px`;
  }
});

$accordion.addEventListener('click', e => {
  if (!e.target.parentElement.classList.contains('menu-container')) return;

  $menuContainers.forEach($menuContainer => {
    const $subMenu = $menuContainer.lastElementChild;

    if (e.target.parentElement === $menuContainer) {
      $menuContainer.classList.add('active');
      $subMenu.style.height = `${+$subMenu.scrollHeight}px`;
    } else {
      $menuContainer.classList.remove('active');
      $subMenu.style.height = `0px`;
    }
  });
});
