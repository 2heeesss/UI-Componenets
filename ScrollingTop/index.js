(function () {
  function throttle(callback, delay) {
    let timer;
    return () => {
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          callback();
        }, delay);
      }
    };
  }

  const $scrollIcon = document.querySelector('.scroll-icon');
  document.addEventListener(
    'scroll',
    throttle(() => {
      const MIN_HEIGHT = 100;
      $scrollIcon.style.display = window.scrollY > MIN_HEIGHT ? 'block' : 'none';
    }, 200)
  );

  $scrollIcon.addEventListener('click', () => {
    window.scrollTo(0, 0);
  });
})();
