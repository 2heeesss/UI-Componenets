import { getCurrentFirstDay, getCurrentLastDay, getPrevLastDate } from './utils/date.js';

import { currentDates } from './currentDates.js';

function setCurrentDates(date) {
  const currentLastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  currentDates.current = new Array(currentLastDate).fill(0).map((_, i) => i + 1);
}

function setPrevDates(thisFirstDay, prevMonthLastDate) {
  if (thisFirstDay !== 0) {
    const prevMonthDates = new Array(thisFirstDay)
      .fill(0)
      .map((_, diffPrevLastDate) => prevMonthLastDate - diffPrevLastDate)
      .reverse();
    currentDates.prev = prevMonthDates;
  } else {
    currentDates.prev = [];
  }
}

function setNextDates(thisLastDay) {
  if (thisLastDay !== 6) {
    currentDates.next = new Array(6 - thisLastDay).fill(0).map((_, i) => i + 1);
  } else {
    currentDates.next = [];
  }
}

export function setCalendarDates(date) {
  setCurrentDates(date);
  setPrevDates(getCurrentFirstDay(date), getPrevLastDate(date));
  setNextDates(getCurrentLastDay(date));
}
