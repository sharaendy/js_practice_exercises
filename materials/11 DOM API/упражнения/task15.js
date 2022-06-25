//! решение 1 (не прошел один тест)
export default function app() {
  
  function stepper(counter) {
    if (counter % 2 !== 0) {
      return 'x';
    }
    return 'o';
  }
  
  const root = document.querySelector('.root');
  root.append(generateField());
  const table = document.querySelector('.table-bordered');
  let stepNumber = 0;

  table.addEventListener('click', (event) => {
    const span = event.target.querySelector('span');
      stepNumber += 1;
      span.textContent = stepper(stepNumber);
      span.classList.remove('invisible');
  });
}

//! решение 2
export default () => {
  const tableEl = generateField();

  let currentSymbol = 'x';
  const switchPlayer = () => {
    currentSymbol = currentSymbol === 'x' ? 'o' : 'x';
  };

  tableEl.addEventListener('click', (e) => {
    if (e.target.textContent === 's') {
      e.target.textContent = currentSymbol;
    }
    switchPlayer();
  });

  const root = document.querySelector('.root');
  root.append(tableEl);
};