//! решение 1
export default async function toDo() {
  const responseState = await axios.get(routes.tasksPath());
  const state = responseState.data;
  const inputEl = document.querySelector('.form-control');
  const formEl = document.querySelector('.form-inline');
  const ulEl = document.querySelector('.list-group');
  inputEl.focus();

  if (state.length !== 0) {
    responseState.data.items.reverse().forEach(addTask);
  }

  function addTask(obj) {
    const text = obj.name;
    const newTask = document.createElement('li');
    ulEl.prepend(newTask);
    newTask.classList.add('list-group-item');
    newTask.textContent = text;
    state.items.push({ name: text });
  }

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const taskText = formData.get('name')
    const stateUp = { name: taskText }
    addTask(stateUp);
    formEl.reset();
    inputEl.focus();
    axios.post(routes.tasksPath(), stateUp);
  });
}

//! решение 2
const render = (state, { form, input, tasksContainer }) => {
  form.reset();
  input.focus();
  const tasksElements = state.tasks.map((task) => {
    const el = document.createElement('li');
    el.classList.add('list-group-item');
    el.textContent = task.name;
    return el;
  });

  tasksContainer.replaceChildren(...tasksElements);
};

const app = async () => {
  const response = await axios.get(routes.tasksPath());

  const state = {
    tasks: response.data.items,
  };

  const form = document.querySelector('form');
  const input = document.querySelector('input');
  const tasksContainer = document.querySelector('#tasks');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
    };
    try {
      await axios.post(routes.tasksPath(), data);
      state.tasks.unshift(data);
    } catch (error) {
      console.error(error); // eslint-disable-line no-console
    }

    render(state, { form, input, tasksContainer });
  });

  render(state, { form, input, tasksContainer });
};

export default app;