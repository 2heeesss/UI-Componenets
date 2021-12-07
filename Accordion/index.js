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

$accordion.addEventListener('click', ({ target }) => {
  if (!target.parentElement.classList.contains('menu-container')) return;

  $menuContainers.forEach($menuContainer => {
    const $subMenu = $menuContainer.lastElementChild;

    if (target.parentElement === $menuContainer) {
      $menuContainer.classList.add('active');
      $subMenu.style.height = `${+$subMenu.scrollHeight}px`;
    } else {
      $menuContainer.classList.remove('active');
      $subMenu.style.height = `0px`;
    }
  });
});
