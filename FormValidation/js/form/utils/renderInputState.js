import { ERROR_MESSAGE } from '../../textData/message.js';

function getIconErrorClassList(target) {
  return target.parentElement.querySelector('.icon-error').classList;
}
function getIconSuccessClassList(target) {
  return target.parentElement.querySelector('.icon-success').classList;
}

function setErrorMessageTextContent(target, value) {
  target.parentElement.lastElementChild.textContent = value;
}

function removeSuccessIcon(target) {
  getIconSuccessClassList(target).add('hidden');
}
function addSuccessIcon(target) {
  getIconSuccessClassList(target).remove('hidden');
}
function removeErrorIcon(target) {
  getIconErrorClassList(target).add('hidden');
}
function addErrorIcon(target) {
  getIconErrorClassList(target).remove('hidden');
}

export function renderError(target, type) {
  setErrorMessageTextContent(target, ERROR_MESSAGE[type]);
  addErrorIcon(target);
  removeSuccessIcon(target);
}

export function renderInit(target) {
  setErrorMessageTextContent(target, '');
  removeErrorIcon(target);
  removeSuccessIcon(target);
}

export function renderSuccess(target) {
  setErrorMessageTextContent(target, '');
  addSuccessIcon(target);
  removeErrorIcon(target);
}
