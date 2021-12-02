import { addEventSignin } from './form/signin.js';
import { addEventSignup } from './form/signup.js';

document.querySelectorAll('.link').forEach($formLink => {
  $formLink.firstElementChild.onclick = () => {
    document.querySelector('.form.signin').classList.toggle('hidden');
    document.querySelector('.form.signup').classList.toggle('hidden');
  };
});

addEventSignup();
addEventSignin();
