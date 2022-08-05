//! решение 1
export default function app(laptops) {
  const state = {
    models: laptops,
    filtered: laptops,

    filter: {
      processor: null,
      memory: null,
      frequencyMin: null,
      frequencyMax: null,
    },
  };

  const processorEl = document.querySelector('select[name="processor_eq"]');
  const memoryEl = document.querySelector('select[name="memory_eq"]');
  const frequencyElMin = document.querySelector('input[name="frequency_gte"]');
  const frequencyElMax = document.querySelector('input[name="frequency_lte"]');
  const result = document.querySelector('.result');
  
  function render() {
    result.innerHTML = null;
    state.filtered = state.models.filter((model) => {
      const abs = [
        model.processor === state.filter.processor || state.filter.processor === null,
        model.memory === state.filter.memory || state.filter.memory === null,
        model.frequency > state.filter.frequencyMin || state.filter.frequencyMin === null,
        model.frequency < state.filter.frequencyMax || state.filter.frequencyMax === null,
      ];
      return !abs.includes(false);
    });

    if (state.filtered.length > 0) {
      const ulEl = document.createElement('ul');
      state.filtered.forEach((item) => {
        const liEl = document.createElement('li');
        liEl.textContent = item.model;
        ulEl.append(liEl);
      });
      result.append(ulEl);
    }
  }

  processorEl.addEventListener('change', (event) => {
    event.preventDefault();
    const selectedProc = event.target.value;
    state.filter.processor = selectedProc;
    render();
  });

  memoryEl.addEventListener('change', (event) => {
    event.preventDefault();
    const selectedMemory = Number(event.target.value);
    state.filter.memory = selectedMemory;
    render();
  });

  frequencyElMin.addEventListener('input', (event) => {
    event.preventDefault();
    const minFrequency = Number(event.target.value);
    state.filter.frequencyMin = minFrequency;
    render();
  });

  frequencyElMax.addEventListener('input', (event) => {
    event.preventDefault();
    const maxFrequency = Number(event.target.value);
    state.filter.frequencyMax = maxFrequency;
    render();
  });

  render();
}


//! решение 2
// Решение позволяет легко расширить приложение новыми фильтрами и типами проверок
const predicates = {
  eq: (value) => (el) => String(el) === String(value),
  gte: (value) => (el) => (el) >= Number(value),
  lte: (value) => (el) => (el) <= Number(value),
};

const inputsConfig = {
  processor_eq: 'change',
  memory_eq: 'change',
  frequency_lte: 'input',
  frequency_gte: 'input',
};

const filterItems = (items, query) => {
  // Остаются только изменённые пользователем фильтры
  const activeFilters = Object.entries(query).filter(([, filterValue]) => filterValue !== null);
  // Фильтрация товаров: каждый товар должен удовлетворять каждому фильтру из списка
  return items.filter((item) => activeFilters.every(([filterName, filterValue]) => {
    const [propertyName, predicate] = filterName.split('_');
    const match = predicates[predicate];
    const itemProperty = item[propertyName];
    return match(filterValue)(itemProperty);
  }));
};

const render = (state) => {
  const resultElement = document.querySelector('.result');
  const filtered = filterItems(state.laptops, state.filter);

  if (filtered.length === 0) {
    resultElement.innerHTML = '';
    return;
  }
  // элементы для вставки можно как создать через интерфейс document.createElement,
  // так и собрать строку
  const html = `<ul>${filtered.map((item) => `<li>${item.model}</li>`).join('')}</ul>`;
  resultElement.innerHTML = html;
};

export default (laptops) => {
  // state на уровне приложения
  const state = {
    laptops,
    filter: {
      processor_eq: null,
      memory_eq: null,
      frequency_lte: null,
      frequency_gte: null,
    },
  };
  // На каждое поле ввода вешается обработчик, изменяющий стейт и вызывающий отрисовку
  Object.entries(inputsConfig).forEach(([inputName, eventName]) => {
    const input = document.querySelector(`[name="${inputName}"]`);
    input.addEventListener(eventName, ({ target }) => {
      state.filter[inputName] = target.value === '' ? null : target.value;
      render(state);
    });
  });
  render(state);
};