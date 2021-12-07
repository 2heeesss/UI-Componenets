const $popup = document.querySelector('.popup');
const $toggleBtn = document.getElementById('popupBtn');
const $popupForm = document.querySelector('.popup-form');
const $popupInput = document.querySelector('.popup-input');
const $popupMessage = document.querySelector('.popup-message');
const $popupCloses = document.querySelectorAll('.popup-close');

function addPopupActive() {
  $popup.classList.add('active');
}
function removePopupActive() {
  $popup.classList.remove('active');
}

function isEmpty(value) {
  return value === '';
}

$popup.addEventListener('click', e => {
  if (!e.target.classList.contains('popup')) return;
  removePopupActive();
});

$toggleBtn.addEventListener('click', () => {
  addPopupActive();
});

$popupForm.addEventListener('submit', e => {
  e.preventDefault();
  const inputValue = $popupInput.value.trim();
  if (isEmpty(inputValue)) return;
  $popupMessage.textContent = `from popup: ${inputValue}`;
  $popupInput.value = '';
  removePopupActive();
});

$popupCloses.forEach($popupClose => {
  $popupClose.addEventListener('click', e => {
    e.preventDefault();
    removePopupActive();
  });
});
