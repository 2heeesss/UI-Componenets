import { formInputData, formValidation } from '../state.js';

import { ERROR_MESSAGE } from '../textData/message.js';
import { isValidation } from './validate.js';

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

export const renderValidationState = (() => {
  const $btns = document.querySelectorAll('.button');

  return ({ target, formType, inputType, isValidInput }) => {
    if (!isValidInput) {
      formValidation[formType][inputType] = false;
      renderError(target, inputType);
    }
    if (target.value === '') {
      renderInit(target);
    }
    if (isValidInput) {
      formValidation[formType][inputType] = true;
      formInputData[formType][inputType] = target.value;
      renderSuccess(target);
    }
    $btns.forEach($btn => {
      $btn.disabled = !isValidation(formValidation[formType]);
    });
  };
})();
