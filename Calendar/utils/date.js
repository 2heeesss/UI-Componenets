export function isSameDate(date1, date2) {
  return date1 === date2;
}

export function getCurrentFirstDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
}
export function getCurrentLastDay(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
}
export function getPrevLastDate(date) {
  return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
}
export function getPrevLastDateObject(date) {
  return new Date(date.getFullYear(), date.getMonth(), 0);
}
export function getPrevDateObject(date) {
  return new Date(date.getFullYear(), date.getMonth() - 1, date.getDate());
}
export function getNextLastDate(date) {
  return new Date(date.getFullYear(), date.getMonth() + 2, 0).getDate();
}
export function getNextLastDateObject(date) {
  return new Date(date.getFullYear(), date.getMonth() + 2, 0);
}
export function getNextDateObject(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, date.getDate());
}

export function getDateObject(date, customDate = 1) {
  return new Date(date.getFullYear(), date.getMonth(), +customDate);
}
