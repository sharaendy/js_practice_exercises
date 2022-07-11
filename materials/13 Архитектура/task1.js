//! решение 1
export default function calculator() {
  let sum = 0;
  const input = document.querySelector('.form-control');
  const form = document.querySelector('.form-inline');
  const result = document.getElementById('result');
  const resetButton = document.querySelector('button[type=button]');
  input.focus();

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const currentNumber = parseInt(formData.get('number'), 10);
    result.textContent = sum + currentNumber;
    sum += currentNumber;
    form.reset();
    input.focus();
  });

  resetButton.addEventListener('click', (e) => {
    e.preventDefault();
    form.reset();
    sum = 0;
    result.textContent = 0;
    input.focus();
  });
}

//! решение 2
// повторяющийся код удобно вынести в отдельную функцию
const render = (state, formEl, inputEl, resultEl) => {
  formEl.reset();
  inputEl.focus();
  resultEl.textContent = state;
};

export default () => {
  // состояние относится к уровню приложения
  let state = 0;

  const formEl = document.querySelector('form');
  const inputEl = document.querySelector('input');
  const resetEl = document.querySelector('button');
  const resultEl = document.querySelector('#result');

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    state += parseInt(data.get('number'), 10);
    render(state, formEl, inputEl, resultEl);
  });

  resetEl.addEventListener('click', () => {
    state = 0;
    render(state, formEl, inputEl, resultEl);
  });

  inputEl.focus();
};