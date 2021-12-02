import { TOAST_TYPE, createToastAction, toaster } from '../toast.js';
import { isCorrectConfirmPassword, isCorrectEmail, isCorrectName, isCorrectPassword } from './utils/validate.js';

import { formInputData } from './state.js';
import { renderValidationState } from './utils/renderInputState.js';

const $signupForm = document.querySelector('.form.signup');
const $signupEmail = document.getElementById('signup-userid');
const $signupName = document.getElementById('signup-name');
const $signupPassword = document.getElementById('signup-password');
const $signupConfirmPassword = document.getElementById('signup-confirm-password');

const formType = 'signup';

export function addEventSignup() {
  $signupEmail.addEventListener('input', ({ target }) => {
    renderValidationState({ target, formType, inputType: 'email', isValidInput: isCorrectEmail(target.value) });
  });

  $signupName.addEventListener('input', ({ target }) => {
    renderValidationState({ target, formType, inputType: 'name', isValidInput: isCorrectName(target.value) });
  });

  $signupPassword.addEventListener('input', ({ target }) => {
    renderValidationState({ target, formType, inputType: 'password', isValidInput: isCorrectPassword(target.value) });
  });

  $signupConfirmPassword.addEventListener('input', ({ target }) => {
    renderValidationState({
      target,
      formType,
      inputType: 'confirmPassword',
      isValidInput: isCorrectConfirmPassword(formInputData[formType])(target.value),
    });
  });

  $signupForm.addEventListener('submit', e => {
    e.preventDefault();
    toaster.add(createToastAction(TOAST_TYPE.SUCCESS, 'Well done!', 'signup Successfully'));

    console.log('POST /signup', {
      email: formInputData[formType].email,
      name: formInputData[formType].name,
      password: formInputData[formType].password,
    });
  });
}
