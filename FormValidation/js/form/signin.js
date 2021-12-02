import { TOAST_TYPE, createToastAction, toaster } from '../toast.js';
import { isCorrectEmail, isCorrectPassword } from './utils/validate.js';

import { formInputData } from './state.js';
import { renderValidationState } from './utils/renderInputState.js';

const $signinUserid = document.getElementById('signin-userid');
const $signinPassword = document.getElementById('signin-password');
const $signinForm = document.querySelector('.form.signin');

const formType = 'signin';

export function addEventSignin() {
  $signinUserid.addEventListener('input', ({ target }) => {
    renderValidationState({ target, formType, inputType: 'email', isValidInput: isCorrectEmail(target.value) });
  });

  $signinPassword.addEventListener('input', ({ target }) => {
    renderValidationState({ target, formType, inputType: 'password', isValidInput: isCorrectPassword(target.value) });
  });

  $signinForm.addEventListener('submit', e => {
    e.preventDefault();
    toaster.add(createToastAction(TOAST_TYPE.SUCCESS, 'Well done!', 'signin Successfully'));
    console.log('POST /signin', { email: formInputData[formType].email, password: formInputData[formType].password });
  });
}
