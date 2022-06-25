//! решение 1
import { htmlEscape } from 'escape-goat';

export default () => {
  const form = document.body.querySelector('.feedback-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get('email');
    const name = formData.get('name');
    const comment = htmlEscape(formData.get('comment'));

    const newHtml = `<div>
  <p>Feedback has been sent</p>
  <div>Email: ${email}</div>
  <div>Name: ${name}</div>
  <div>Comment: ${comment}</div>
</div>`;

    const container = document.body.querySelector('.container');
    container.innerHTML = newHtml;
  });
};


//! решенеи 2
// BEGIN
const render = (element, data) => {
  const div = document.createElement('div');
  const { email, name, comment } = data;
  div.innerHTML = `
    <p>Feedback has been sent</p>
    <div>Email: ${htmlEscape(email)}</div>
    <div>Name: ${htmlEscape(name)}</div>
    <div>Comment: ${htmlEscape(comment)}</div>
  `;
  element.replaceWith(div);
};

export default () => {
  const formElement = document.querySelector('.feedback-form');
  const handle = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    render(formElement, Object.fromEntries(formData));
  };
  formElement.addEventListener('submit', handle);
};
// END