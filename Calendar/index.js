// 이슈 1. 마지막날이 31일 달에서 28일인 달로 넘어갈 때, 날짜 변경 이슈
// -> 전후 getDate 비교 후 현재 inputDate에 반영

const monthName = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

let inputDate = new Date();

function isToday(inputDate, currentDate) {
  if (inputDate.getDate() !== currentDate) return false;
  return true;
}

function getThisCalenderData(date) {
  const thisMonthName = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const thisLastDate = thisMonthName.getDate();
  const thisDates = {
    prev: [],
    current: new Array(thisLastDate).fill(0).map((_, i) => i + 1),
    next: [],
  };

  const thisFirstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const thisLastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

  const prevMonthLastDate = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

  if (thisFirstDay !== 0) {
    for (let i = 0; i < thisFirstDay; i++) {
      thisDates.prev.unshift(prevMonthLastDate - i);
    }
  }

  if (thisLastDay !== 6) {
    for (let i = 1; i < 7 - thisLastDay; i++) {
      thisDates.next.push(i);
    }
  }

  return { date, thisDates };
}

function render({ date, thisDates }) {
  const $calendarDate = document.createElement('div');
  const $fragment = document.createDocumentFragment();

  const $calendarMonth = document.querySelector('.calendar-month');
  const $calendarYear = document.querySelector('.calendar-year');
  $calendarMonth.textContent = monthName[date.getMonth()];
  $calendarYear.textContent = date.getFullYear();

  function appendDate(dates, className) {
    dates[className].forEach(currentDate => {
      const $dateItem = document.createElement('span');
      $dateItem.textContent = currentDate;
      $dateItem.classList.add(className);
      if (isToday(date, currentDate) && className === 'current') $dateItem.classList.add('today');
      $fragment.appendChild($dateItem);
    });
  }

  appendDate(thisDates, 'prev');
  appendDate(thisDates, 'current');
  appendDate(thisDates, 'next');
  $calendarDate.appendChild($fragment);
  $calendarDate.classList.add('calendar-date');

  const $calendarGrid = document.querySelector('.calendar-grid');
  $calendarGrid.replaceChild($calendarDate, $calendarGrid.lastElementChild);
}

render(getThisCalenderData(inputDate));
const $inputBtn = document.querySelector('.input-date');
const $calendar = document.querySelector('.calendar');
const $calendarGrid = document.querySelector('.calendar-grid');

function formatDate(date) {
  return +date < 10 ? '0' + +date : '' + +date;
}

const $prevBtn = document.querySelector('.prev-btn');
$prevBtn.addEventListener('click', () => {
  inputDate =
    inputDate.getDate() > new Date(inputDate.getFullYear(), inputDate.getMonth(), 0).getDate()
      ? new Date(inputDate.getFullYear(), inputDate.getMonth(), 0)
      : new Date(inputDate.getFullYear(), inputDate.getMonth() - 1, inputDate.getDate());
  $inputBtn.value = `${inputDate.getFullYear()}-${formatDate(inputDate.getMonth() + 1)}-${formatDate(
    inputDate.getDate()
  )}`;
  render(getThisCalenderData(inputDate));
});

const $nextBtn = document.querySelector('.next-btn');
$nextBtn.addEventListener('click', () => {
  inputDate =
    inputDate.getDate() > new Date(inputDate.getFullYear(), inputDate.getMonth() + 2, 0).getDate()
      ? new Date(inputDate.getFullYear(), inputDate.getMonth() + 2, 0)
      : new Date(inputDate.getFullYear(), inputDate.getMonth() + 1, inputDate.getDate());
  $inputBtn.value = `${inputDate.getFullYear()}-${formatDate(inputDate.getMonth() + 1)}-${formatDate(
    inputDate.getDate()
  )}`;
  render(getThisCalenderData(inputDate));
});

$inputBtn.addEventListener('click', () => {
  $calendar.classList.add('active');
});

$calendarGrid.addEventListener('click', e => {
  if (!e.target.classList.contains('current')) return;
  $inputBtn.value = `${inputDate.getFullYear()}-${formatDate(inputDate.getMonth() + 1)}-${formatDate(
    e.target.textContent
  )}`;

  const $currentDates = document.querySelectorAll('.current');
  $currentDates.forEach($currentDate => $currentDate.classList.remove('today'));
  e.target.classList.add('today');
  inputDate = new Date(inputDate.getFullYear(), inputDate.getMonth(), +e.target.textContent);

  $calendar.classList.remove('active');
});
