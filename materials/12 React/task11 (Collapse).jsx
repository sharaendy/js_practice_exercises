// src/Collapse.jsx
// Реализуйте компонент <Collapse>, который по клику на ссылке отображает или скрывает свое содержимое. Если содержимое скрыто, то клик раскрывает его. И наоборот - если содержимое отображается, то клик скрывает контент. Содержимое передается в компонент через свойство text. За начальное состояние открытости, отвечает свойство opened, которое по умолчанию равно true.

// const text = 'collapse me';
// <Collapse text={text} opened={false} />;
// <div>
//   <p>
//     <a class="btn btn-primary" data-bs-toggle="collapse" href="#" role="button" aria-expanded="false">Link with href</a>
//   </p>
//   <div class="collapse">
//     <div class="card card-body">
//       collapse me
//     </div>
//   </div>
// </div>

// После клика к классу collapse элемента <div> добавляется класс show, a значение атрибута aria-expanded меняется на true.

import React from 'react';
import ReactDOM from 'react-dom/client';
import classNames from 'classnames';
// import _ from 'lodash';
// import './index.css';

//! решение 1
export default class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: this.props.text, opened: this.props.opened };    
  }

  pressedLink = () => {
    this.setState(() => ({ opened: !this.state.opened }));
  };

  render() {
    const { text, opened } = this.state;

    return (
      <div>
        <p>
          <a
            onClick={this.pressedLink}
            className="btn btn-primary"
            data-bs-toggle="collapse"
            href="#"
            role="button"
            aria-expanded="false"
          >
            Link with href
          </a>
        </p>
        <div className="collapse">
          <div className="card card-body">{opened && `${text}`}</div>
        </div>
      </div>
    );
  }
}

//! решение 2
export default class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: this.props.text, opened: this.props.opened };    
  }

  pressedLink = () => {
    this.setState(() => ({ opened: !this.state.opened }));
  };

  render() {
    const { text, opened } = this.state;
    const divClass = classNames('collapse', {
      'show': opened,
    });

    return (
      <div>
        <p>
          <a
            onClick={this.pressedLink}
            className="btn btn-primary"
            data-bs-toggle="collapse"
            href="#"
            role="button"
            aria-expanded={opened}
          >
            Link with href
          </a>
        </p>
        <div className={divClass}>
          <div className="card card-body">{text}</div>
        </div>
      </div>
    );
  }
}

Collapse.defaultProps = {
  opened: true,
};

//! решение 3
// BEGIN
export default class Collapse extends React.Component {
  constructor(props) {
    super(props);
    const { opened } = props;
    this.state = { opened };
  }

  handleToggle = (e) => {
    e.preventDefault();
    this.setState(({ opened }) => ({ opened: !opened }));
  }

  render() {
    const { opened } = this.state;
    const { text } = this.props;
    const classes = cn({
      collapse: true,
      show: opened,
    });

    return (
      <div>
        <p>
          <a
            className="btn btn-primary"
            onClick={this.handleToggle}
            data-bs-toggle="collapse"
            href="#"
            role="button"
            aria-expanded={opened}
          >
            Link with href
          </a>
        </p>
        <div className={classes}>
          <div className="card card-body">
            {text}
          </div>
        </div>
      </div>
    );
  }
}

Collapse.defaultProps = {
  opened: true,
};
// END


const text = 'Collapse me, Andrey';
const mountNode = document.getElementById('root');
const root = ReactDOM.createRoot(mountNode);
root.render(<Collapse text={text} opened={false} />);


//! 4
import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
export default class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: this.props.opened,
    };
  }

  toggleLink = () => this.setState(({ opened }) => ({ opened: !opened }));

  render() {
    const { opened } = this.state;
    const { text } = this.props;
    const collapseClass = cn('collapse', {
      show: opened,
    });

    return (
      <div>
        <p>
          <a
            onClick={this.toggleLink}
            aria-expanded={opened}
            className="btn btn-primary"
            data-bs-toggle="collapse"
            href="#"
            role="button"
          >
            Link with href
          </a>
        </p>
        <div className={collapseClass}>
          <div className="card card-body">{text}</div>
        </div>
      </div>
    );
  }
}

Collapse.defaultProps = {
  opened: true,
};

// END