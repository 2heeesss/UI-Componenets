import {
  getDateObject,
  getNextDateObject,
  getNextLastDate,
  getNextLastDateObject,
  getPrevDateObject,
  getPrevLastDate,
  getPrevLastDateObject,
} from './utils/date.js';

import { currentDates } from './currentDates.js';
import { getDateText } from './utils/format.js';
import { render } from './renderCalendar.js';

function clearDateFocus() {
  const $currentDates = document.querySelectorAll('.current');
  $currentDates.forEach($currentDates => $currentDates.classList.remove('today'));
}

export function addCalendarEvent() {
  const $calendar = document.querySelector('.calendar');
  const $calendarGrid = document.querySelector('.calendar-grid');
  const $prevBtn = document.querySelector('.prev-btn');
  const $nextBtn = document.querySelector('.next-btn');
  const $inputBtn = document.querySelector('.input-date');

  $prevBtn.addEventListener('click', () => {
    currentDates.inputDate =
      currentDates.inputDate.getDate() > getPrevLastDate(currentDates.inputDate)
        ? getPrevLastDateObject(currentDates.inputDate)
        : getPrevDateObject(currentDates.inputDate);
    $inputBtn.value = getDateText(currentDates.inputDate);
    render();
  });

  $nextBtn.addEventListener('click', () => {
    currentDates.inputDate =
      currentDates.inputDate.getDate() > getNextLastDate(currentDates.inputDate)
        ? getNextLastDateObject(currentDates.inputDate)
        : getNextDateObject(currentDates.inputDate);
    $inputBtn.value = getDateText(currentDates.inputDate);
    render();
  });

  $inputBtn.addEventListener('click', () => {
    $calendar.classList.add('active');
  });

  $calendarGrid.addEventListener('click', e => {
    if (!e.target.classList.contains('current')) return;
    $inputBtn.value = getDateText(currentDates.inputDate, e.target);
    clearDateFocus();
    e.target.classList.add('today');
    currentDates.inputDate = getDateObject(currentDates.inputDate, +e.target.textContent);
    $calendar.classList.remove('active');
  });
}
