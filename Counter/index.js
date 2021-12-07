const $increaseBtn = document.querySelector('.increase');
const $decreaseBtn = document.querySelector('.decrease');
const $counter = document.querySelector('.counter');

const counter = (function () {
  let count = 0;
  return function (callback) {
    count = callback(count);
    return count;
  };
})();

function increaser(count) {
  const INCREASE_NUM = 1;
  return count + INCREASE_NUM;
}

function decreaser(count) {
  const DECREASE_NUM = 1;
  return count < DECREASE_NUM ? 0 : count - DECREASE_NUM;
}

$increaseBtn.addEventListener('click', () => {
  $counter.textContent = counter(increaser);
});

$decreaseBtn.addEventListener('click', () => {
  $counter.textContent = counter(decreaser);
});
