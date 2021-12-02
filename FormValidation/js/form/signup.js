import { TOAST_TYPE, createToastAction, toaster } from '../toast.js';
import { isCorrectEmail, isCorrectName, isCorrectPassword, isValidation } from './utils/validate.js';

import { ERROR_MESSAGE } from '../textData/message.js';

const signupInputData = {
  email: null,
  name: null,
  password: null,
  confirmPassword: null,
};

const signupValidation = {
  email: false,
  name: false,
  password: false,
  confirmPassword: false,
};

function isCorrectConfirmPassword(confirmPassword) {
  return signupInputData.password === confirmPassword;
}

const $signupForm = document.querySelector('.form.signup');
const $signupEmail = document.getElementById('signup-userid');
const $signupName = document.getElementById('signup-name');
const $signupPassword = document.getElementById('signup-password');
const $signupConfirmPassword = document.getElementById('signup-confirm-password');
const $signupBtn = document.querySelector('.signup.button');

function renderValidMessage(e, type, validate) {
  if (!validate(e.target.value)) {
    signupValidation[type] = false;
    e.target.parentElement.lastElementChild.textContent = ERROR_MESSAGE[type];
    e.target.parentElement.querySelector('.icon-error').classList.remove('hidden');
    e.target.parentElement.querySelector('.icon-success').classList.add('hidden');
  }
  if (e.target.value === '') {
    e.target.parentElement.lastElementChild.textContent = '';
    e.target.parentElement.querySelector('.icon-error').classList.add('hidden');
    e.target.parentElement.querySelector('.icon-success').classList.add('hidden');
  }
  if (validate(e.target.value)) {
    signupInputData[type] = e.target.value;
    signupValidation[type] = true;
    e.target.parentElement.lastElementChild.textContent = '';
    e.target.parentElement.querySelector('.icon-success').classList.remove('hidden');
    e.target.parentElement.querySelector('.icon-error').classList.add('hidden');
  }
  $signupBtn.disabled = !isValidation(signupValidation);
}

export function addEventSignup() {
  $signupEmail.addEventListener('input', e => {
    renderValidMessage(e, 'email', isCorrectEmail);
  });

  $signupName.addEventListener('input', e => {
    renderValidMessage(e, 'name', isCorrectName);
  });

  $signupPassword.addEventListener('input', e => {
    renderValidMessage(e, 'password', isCorrectPassword);
  });

  $signupConfirmPassword.addEventListener('input', e => {
    renderValidMessage(e, 'confirmPassword', isCorrectConfirmPassword);
  });

  $signupForm.addEventListener('submit', e => {
    e.preventDefault();
    toaster.add(createToastAction(TOAST_TYPE.SUCCESS, 'Well done!', 'signup Successfully'));

    console.log('POST /signup', {
      email: signupInputData.email,
      name: signupInputData.name,
      password: signupInputData.password,
    });
  });
}
