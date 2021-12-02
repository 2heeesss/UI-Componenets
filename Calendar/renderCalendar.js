import { currentDates } from './currentDates.js';
import { isSameDate } from './utils/date.js';
import { setCalendarDates } from './setCalendarDates.js';

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

function getDateItem(dates, className) {
  const $fragment = document.createDocumentFragment();
  dates[className].forEach(date => {
    const $dateItem = document.createElement('span');
    $dateItem.textContent = date;
    $dateItem.classList.add(className);
    if (isSameDate(currentDates.inputDate.getDate(), date) && className === 'current') {
      $dateItem.classList.add('today');
    }
    $fragment.appendChild($dateItem);
  });
  return $fragment;
}

function getNewCalendarFragment(currentDates) {
  const $fragment = document.createDocumentFragment();
  $fragment.appendChild(getDateItem(currentDates, 'prev'));
  $fragment.appendChild(getDateItem(currentDates, 'current'));
  $fragment.appendChild(getDateItem(currentDates, 'next'));
  return $fragment;
}

function replaceCalendar($newCalendar) {
  const $calendarGrid = document.querySelector('.calendar-grid');
  $calendarGrid.replaceChild($newCalendar, $calendarGrid.lastElementChild);
}

export function render() {
  setCalendarDates(currentDates.inputDate);
  const $calendarDate = document.createElement('div');

  document.querySelector('.calendar-month').textContent = monthName[currentDates.inputDate.getMonth()];
  document.querySelector('.calendar-year').textContent = currentDates.inputDate.getFullYear();

  $calendarDate.appendChild(getNewCalendarFragment(currentDates));
  $calendarDate.classList.add('calendar-date');

  replaceCalendar($calendarDate);
}
