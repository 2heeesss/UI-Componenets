// html
// 1. 버튼 만들기
// 2. 입력 폼 만들기
// 3. 폼에 작성한 내용 버튼 밑에 추가하기

// js
// 1. popup 배경 및 팝업창 생성
// 2. 토글버튼 클릭 이벤트 : active 클래스 추가
// 3. 팝업창 내부 기능(닫기, input) 구현
// 4. input OK 클릭 시, popup-message에 텍스트 추가
// 4-1. cancel이나 popup 닫으면 message 사라짐
// 5. submit 이벤트 : active 클래스 제거

const $popup = document.querySelector('.popup');

function addPopupActive() {
  $popup.classList.add('active');
}
function removePopupActive() {
  $popup.classList.remove('active');
}

$popup.addEventListener('click', e => {
  if (!e.target.classList.contains('popup')) return;
  removePopupActive();
});

const $toggleBtn = document.getElementById('popupBtn');
$toggleBtn.addEventListener('click', () => {
  addPopupActive();
});

const $popupForm = document.querySelector('.popup-form');
const $popupInput = document.querySelector('.popup-input');
const $popupMessage = document.querySelector('.popup-message');
$popupForm.addEventListener('submit', e => {
  e.preventDefault();
  const inputValue = $popupInput.value.trim();
  if (inputValue === '') return;
  $popupMessage.textContent = `from popup: ${inputValue}`;
  $popupInput.value = '';
  removePopupActive();
});

const $popupCloses = document.querySelectorAll('.popup-close');
$popupCloses.forEach($popupClose => {
  $popupClose.addEventListener('click', e => {
    e.preventDefault();
    removePopupActive();
  });
});
