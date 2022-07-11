//! решение 1
export default function app(list) {
  const state = {
    companies: list,
    uiState: {
      collapse: [],
    },
  };
  // ---------------
  state.companies.forEach((company) => {
    const { id, description } = company;
    state.uiState.collapse.push({ id, description, visibility: false });
  });
  // ---------------
  const container = document.querySelector('.container');

  function view() {
    state.companies.forEach((company) => {
      const buttonEl = document.createElement('button');
      const { name, id } = company;
      buttonEl.classList.add('btn', 'btn-primary');
      buttonEl.setAttribute('id', id);
      buttonEl.textContent = `${name}`;
      container.append(buttonEl);
    });
  }
  view();
  // ---------------
  function renderUi() {
    const currentResult = document.querySelector('.result');
    if (currentResult !== null) {
      currentResult.remove();
    }

    state.uiState.collapse.forEach((item) => {
      if (item.visibility === true) {
        const resultEl = document.createElement('div');
        resultEl.classList.add('result');
        resultEl.textContent = `${item.description}`;
        container.append(resultEl);
      }
    });
  }
  // ---------------
  function changeVisibility(eventId) {
    state.uiState.collapse.forEach((item) => {
      const { id } = item;
      if (eventId === id) {
        item.visibility = !item.visibility;
      }
      if (eventId !== id) {
        item.visibility = false;
      }
    });
  }
  // ---------------
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const eventId = Number(event.target.id);
      changeVisibility(eventId);
      renderUi();
    });
  });
}


//! решение 2
const render = (state, container) => {
  container.innerHTML = '';
  const buttons = state.companies.map(({ id, name }) => {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('btn', 'btn-primary');
    button.textContent = name;
    button.addEventListener('click', () => {
      const nextSelectedId = state.uiState.selectedCompanyId === id ? null : id;
      state.uiState.selectedCompanyId = nextSelectedId;
      render(state, container);
    });
    return button;
  });

  container.append(...buttons);

  if (state.uiState.selectedCompanyId === null) {
    return;
  }

  const outputContainer = document.createElement('div');
  const selectedCompany = state.companies.find((c) => c.id === state.uiState.selectedCompanyId);
  outputContainer.textContent = selectedCompany.description;
  container.append(outputContainer);
};

export default (companies) => {
  const state = {
    companies,
    uiState: {
      selectedCompanyId: null,
    },
  };

  const container = document.querySelector('.container');

  render(state, container);
};