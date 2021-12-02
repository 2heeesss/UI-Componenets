import { TOAST_TYPE, createToastAction, toaster } from '../toast.js';
import { isCorrectEmail, isCorrectPassword, isValidation } from './utils/validate.js';
import { renderError, renderInit, renderSuccess } from './utils/renderInputState.js';

const $signinUserid = document.getElementById('signin-userid');
const $signinPassword = document.getElementById('signin-password');
const $signinBtn = document.querySelector('.signin.button');
const $signinForm = document.querySelector('.form.signin');

const signinInputData = {
  email: null,
  password: null,
};

const signinValidation = {
  email: false,
  password: false,
};

function renderValidationState(target, type, isValidInput) {
  if (!isValidInput) {
    signinValidation[type] = false;
    renderError(target, type);
  }
  if (target.value === '') {
    renderInit(target);
  }
  if (isValidInput) {
    signinValidation[type] = true;
    signinInputData[type] = target.value;
    renderSuccess(target);
  }
  $signinBtn.disabled = !isValidation(signinValidation);
}

export function addEventSignin() {
  $signinUserid.addEventListener('input', ({ target }) => {
    renderValidationState(target, 'email', isCorrectEmail(target.value));
  });

  $signinPassword.addEventListener('input', ({ target }) => {
    renderValidationState(target, 'password', isCorrectPassword(target.value));
  });

  $signinForm.addEventListener('submit', e => {
    e.preventDefault();
    toaster.add(createToastAction(TOAST_TYPE.SUCCESS, 'Well done!', 'signin Successfully'));
    console.log('POST /signin', { email: signinInputData.email, password: signinInputData.password });
  });
}
