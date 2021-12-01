export default function setAttribute(element, value, attribute1, attribute2) {
  attribute2 ? (element[`${attribute1}`][`${attribute2}`] = value) : (element[`${attribute1}`] = value);
}
