//! решение 1

// @ts-check
/* eslint-disable react/prefer-stateless-function, jsx-a11y/anchor-is-valid */

import React from 'react';

// BEGIN (write your solution here)
export default function Item(props) {
  const {
    id, text, state, updater,
  } = props;
  return (
    <div className="row">
      <div className="col-1">{id}</div>
      <div className="col">
        {state === 'active' ? (
          <a onClick={updater(id)} href="#" className="todo-task">
            {text}
          </a>
        ) : (
          <s>
            <a onClick={updater(id)} href="#" className="todo-task">
              {text}
            </a>
          </s>
        )}
      </div>
    </div>
  );
}
// END


//! решение 2
// BEGIN
const Item = ({ task, onClick }) => {
  const link = <a href="#" className="todo-task" onClick={onClick}>{task.text}</a>;

  return (
    <div className="row">
      <div className="col-1">
        {task.id}
      </div>
      <div className="col">
        {task.state === 'finished' ? <s>{link}</s> : link}
      </div>
    </div>
  );
};

export default Item;
// END