//! решение 1
// @ts-nocheck

import axios from 'axios';
import React from 'react';
// import update from 'immutability-helper';
import Item from './Item.jsx';
import routes from './routes.js';

// BEGIN (write your solution here)
export default class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      active: [],
      complited: [],
    };
  }

  componentDidMount() {
    this.getTasks().then((res) => this.sortIncomeTasks(res.data));
  }

  getTasks = async () => axios.get(routes.tasksPath());

  postTask = async (content) => axios
    .post(routes.tasksPath(), { text: content })
    .then((res) => this.setState(({ active }) => ({ active: [res.data, ...active] })));

  activateTask = async (id) => {
    axios.patch(routes.activateTaskPath(id)).then((res) => {
      this.setState(({ active }) => ({
        active: [res.data, ...active],
      }));
    });
  };

  finishTask = async (id) => {
    axios.patch(routes.finishTaskPath(id)).then((res) => {
      this.setState(({ complited }) => ({
        complited: [...complited, res.data],
      }));
    });
  };

  handleInput = (e) => this.setState(() => ({ input: e.target.value }));

  addTask = (e) => {
    e.preventDefault();
    const { input } = this.state;
    this.postTask(input);
    this.setState({ input: '' });
  };

  searchTask = (idx) => {
    const { active, complited } = this.state;
    const inActive = active.filter(({ id }) => id === idx);
    const inComplited = complited.filter(({ id }) => id === idx);
    return inActive.length !== 0 ? inActive[0] : inComplited[0];
  };

  updateTask = (id) => (e) => {
    e.preventDefault();
    const { active, complited } = this.state;
    const task = this.searchTask(id);

    if (task?.state === 'active') {
      this.setState(() => ({
        active: active.filter((item) => item.id !== id),
      }));
      this.finishTask(id);
    } else if (task?.state === 'finished') {
      this.setState(() => ({
        complited: complited.filter((item) => item.id !== id),
      }));
      this.activateTask(id);
    }
  };

  sortIncomeTasks(coll) {
    coll.forEach((task) => {
      const { state } = task;
      if (state === 'active') {
        this.setState(({ active }) => ({ active: [...active, task] }));
      } else if (state === 'finished') {
        this.setState(({ complited }) => ({ complited: [task, ...complited] }));
      }
    });
  }

  renderList = (status) => {
    const { active, complited } = this.state;
    const tasks = status === 'active' ? active : complited;
    return tasks.map(({ id, text, state }) => (
      <Item
        key={id}
        id={id}
        text={text}
        state={state}
        updater={this.updateTask}
      />
    ));
  };

  render() {
    const { active, complited, input } = this.state;

    return (
      <div>
        <div className="mb-3">
          <form onSubmit={this.addTask} className="todo-form mx-3">
            <div className="d-flex col-md-3">
              <input
                type="text"
                value={input}
                onChange={this.handleInput}
                required
                className="form-control me-3"
                placeholder="I am going..."
              />
              <button type="submit" className="btn btn-primary">
                add
              </button>
            </div>
          </form>
        </div>
        {active.length !== 0 && (
          <div className="todo-active-tasks">{this.renderList('active')}</div>
        )}
        {complited.length !== 0 && (
          <div className="todo-finished-tasks">
            {this.renderList('complete')}
          </div>
        )}
      </div>
    );
  }
}
// END
//! решение 2
// BEGIN
export default class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newTaskText: '', tasks: [] };
  }

  componentDidMount() {
    this.fetchTasks();
  }

  handleChangeText = ({ target: { value } }) => {
    this.setState({ newTaskText: value });
  }

  handleFinishTask = (id) => async () => {
    await axios.patch(routes.finishTaskPath(id));
    const { tasks } = this.state;
    const index = tasks.findIndex((t) => t.id === id);
    const updatedTasks = update(tasks, { [index]: { $merge: { state: 'finished' } } });
    this.setState({ tasks: updatedTasks });
  }

  handleActivateTask = (id) => async () => {
    await axios.patch(routes.activateTaskPath(id));
    const { tasks } = this.state;
    const index = tasks.findIndex((t) => t.id === id);
    const updatedTasks = update(tasks, { [index]: { $merge: { state: 'active' } } });
    this.setState({ tasks: updatedTasks });
  }

  handleSubmitForm = async (e) => {
    e.preventDefault();
    const { newTaskText, tasks } = this.state;
    const response = await axios.post(routes.tasksPath(), { text: newTaskText });
    this.setState({ newTaskText: '', tasks: [response.data, ...tasks] });
  }

  fetchTasks = async () => {
    const response = await axios.get(routes.tasksPath());
    this.setState({ tasks: response.data });
  }

  renderFinishedTasks(tasks) {
    return (
      <div className="todo-finished-tasks">
        {tasks.map((task) => (
          <Item key={task.id} task={task} onClick={this.handleActivateTask(task.id)} />
        ))}
      </div>
    );
  }

  renderActiveTasks(tasks) {
    return (
      <div className="todo-active-tasks">
        {tasks.map((task) => (
          <Item key={task.id} task={task} onClick={this.handleFinishTask(task.id)} />
        ))}
      </div>
    );
  }

  renderForm() {
    const { newTaskText } = this.state;
    return (
      <form onSubmit={this.handleSubmitForm} className="todo-form mx-3">
        <div className="d-flex col-md-3">
          <input
            type="text"
            onChange={this.handleChangeText}
            value={newTaskText}
            required
            className="form-control me-3"
            placeholder="I am going..."
          />
          <button type="submit" className="btn btn-primary">add</button>
        </div>
      </form>
    );
  }

  render() {
    const { tasks } = this.state;
    const activeTasks = tasks.filter((t) => t.state === 'active');
    const finishedTasks = tasks.filter((t) => t.state === 'finished');

    return (
      <div>
        <div className="mb-3">
          {this.renderForm()}
        </div>
        {activeTasks.length > 0 && this.renderActiveTasks(activeTasks)}
        {finishedTasks.length > 0 && this.renderFinishedTasks(finishedTasks)}
      </div>
    );
  }
}
// END