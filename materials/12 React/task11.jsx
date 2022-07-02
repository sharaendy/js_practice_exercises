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
