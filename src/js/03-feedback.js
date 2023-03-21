import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const text = document.querySelector('.feedback-form textarea');

form.addEventListener('submit', onFormSubmit);
email.addEventListener('input', throttle(onInput));
text.addEventListener('input', throttle(onInput));

function onFormSubmit(ev) {}

function onInput(ev) {}
