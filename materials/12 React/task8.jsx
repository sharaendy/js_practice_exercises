// src/ListGroup.jsx
// Реализуйте компонент ListGroup, который отрисовывает переданных детей, оборачивая их в список.

// Пример использования:

// <ListGroup>
//   <p>one</p>
//   <p>two</p>
// </ListGroup>;
// Результат:

// <ul class="list-group">
//   <li class="list-group-item"><p>one</p></li>
//   <li class="list-group-item"><p>two</p></li>
// </ul>

import React from 'react';
import ReactDOM from 'react-dom/client';
import cn from 'classnames';

// import App from './App.jsx';
import './index.css';
import './App.css';

//! решение 1

export default class ListGroup extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <ul className="list-group">
        {React.Children.map(children, (child) => {
          return <li className="list-group-item">{child}</li>;
        })}
      </ul>
    );
  }
}

//! решение 2
// BEGIN
export default class ListGroup extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <ul className="list-group">
        {React.Children.map(children, (item) => <li className="list-group-item">{item}</li>)}
      </ul>
    );
  }
}
// END



const rootMount = document.querySelector('#root');
const root = ReactDOM.createRoot(rootMount);
root.render(
  <ListGroup>
    <p>one</p>
    <p>two</p>
  </ListGroup>
);
