export function addElementClass(element, ...classNames) {
  classNames.forEach(className => element.classList.add(className));
}

export function removeElementClass(element, ...classNames) {
  classNames.forEach(className => element.classList.remove(className));
}
