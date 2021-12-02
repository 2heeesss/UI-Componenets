export function isCorrectEmail(id) {
  const idRegExp = /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  return idRegExp.test(id);
}
export function isCorrectPassword(password) {
  const passwordRegExp = /^[\w]{6,13}$/;
  return passwordRegExp.test(password);
}
export function isCorrectName(name) {
  return name.length > 0;
}

export function isValidation(validation) {
  return Object.values(validation).every(valid => valid);
}
