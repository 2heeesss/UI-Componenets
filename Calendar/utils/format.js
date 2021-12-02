function formatDate(date) {
  return +date < 10 ? '0' + +date : '' + +date;
}
export function getDateText(date, target) {
  return `${date.getFullYear()}-${formatDate(date.getMonth() + 1)}-${formatDate(
    !target ? date.getDate() : target.textContent
  )}`;
}
