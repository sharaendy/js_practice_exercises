// Реализуйте компонент, который представляет собой две кнопки и лог событий:

// Лог — это список значений, каждое из которых получается после нажатия на одну из двух кнопок. Снизу находятся более старые события, сверху новые.
// Левая кнопка + добавляет в лог строчку с новым значением равным: значение "самой новой существующей записи лога" + 1
// Правая кнопка - добавляет в лог строчку с новым значением равным: значение "самой новой существующей записи лога" - 1
// При клике на запись в логе она удаляется.

// Начальный HTML:

// <div>
//   <div class="btn-group font-monospace" role="group">
//     <button type="button" class="btn btn-outline-success">+</button>
//     <button type="button" class="btn btn-outline-danger">-</button>
//   </div>
// </div>
// После нажатия последовательности +, +, -, +:

// <div>
//   <div class="btn-group font-monospace" role="group">
//     <button type="button" class="btn btn-outline-success">+</button>
//     <button type="button" class="btn btn-outline-danger">-</button>
//   </div>
//   <div class="list-group">
//     <button type="button" class="list-group-item list-group-item-action">2</button>
//     <button type="button" class="list-group-item list-group-item-action">1</button>
//     <button type="button" class="list-group-item list-group-item-action">2</button>
//     <button type="button" class="list-group-item list-group-item-action">1</button>
//   </div>
// </div>
// Каждое нажатие кнопки добавляет в лог новую строчку сверху.

//! 1
// import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import React from 'react';

// BEGIN (write your solution here)
export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      logs: [],
    };
  }

  addLog = () => this.setState(({ count, logs }) => ({ logs: [{ count, id: uniqueId() }, ...logs], }));

  deleteLog = (id) => (e) => {
    e.preventDefault();
    const newLogs = this.state.logs.filter((item) => item.id !== id);
    // console.log('newLogs =', newLogs)
    this.setState({ logs: newLogs });
  };

  increaseCount = () => {
    this.setState(({ count }) => ({ count: (count += 1) }));
    this.addLog();
  };

  decreaseCount = () => {
    this.setState(({ count }) => ({ count: (count -= 1) }));
    this.addLog();
  };

  // show = () => {
  //   console.log('текущий count =', this.state.count);
  //   console.log('текущий logs =', this.state.logs);
  // };

  renderItem = ({ count, id }) => {
    return (
      <button
        key={id}
        onClick={this.deleteLog(id)}
        type="button"
        className="list-group-item list-group-item-action"
      >
        {count}
      </button>
    );
  };

  render() {
    const { logs } = this.state;
    const list = (
      <div className="list-group">
        {logs.map((item) => this.renderItem(item))}
      </div>
    );

    return (
      <div>
        <div className="btn-group font-monospace" role="group">
          <button
            onClick={this.increaseCount}
            type="button"
            className="btn btn-outline-success"
          >
            +
          </button>
          <button
            onClick={this.decreaseCount}
            type="button"
            className="btn btn-outline-danger"
          >
            -
          </button>
        </div>
        {logs.length !== 0 ? list : null}
      </div>
    );
  }
}
// END

//! 2 лучшее
// BEGIN
export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  handleCount = (value) => {
    const { items } = this.state;
    const currentValue = get(items, [0, 'value'], 0) + value;
    const current = { id: uniqueId(), value: currentValue };
    this.setState({ items: [current, ...items] });
  }

  handleDec = () => this.handleCount(-1);

  handleInc = () => this.handleCount(1);

  handleRemove = (currentId) => () => {
    const { items } = this.state;
    this.setState({ items: items.filter(({ id }) => id !== currentId) });
  }

  renderLog() {
    const { items } = this.state;
    if (items.length === 0) {
      return null;
    }
    return (
      <div className="list-group">
        {items.map(({ id, value }) => (
          <button type="button" className="list-group-item list-group-item-action" key={id} onClick={this.handleRemove(id)}>
            {value}
          </button>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="btn-group font-monospace" role="group">
          <button type="button" className="btn btn-outline-success" onClick={this.handleInc}>+</button>
          <button type="button" className="btn btn-outline-danger" onClick={this.handleDec}>-</button>
        </div>
        {this.renderLog()}
      </div>
    );
  }
}
// END