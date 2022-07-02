import React from 'react';
import ReactDOM from 'react-dom/client';
import classNames from 'classnames';

import './index.css';


//! решение 1
export default class BtnGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pressedLeft: false, pressedRight: false };
  }

  setActiveLeft = () => {
    this.setState(() => ({ pressedLeft: true, pressedRight: false }));
  };

  setActiveRight = () => {
    this.setState(() => ({ pressedLeft: false, pressedRight: true }));
  };

  render() {
    const btnClassLeft = classNames('btn', 'btn-secondary', [
      this.state.pressedLeft ? 'active' : null,
    ]);

    const btnClassRight = classNames('btn', 'btn-secondary', [
      this.state.pressedRight ? 'active' : null,
    ]);

    return (
      <div className="btn-group" role="group">
        <button
          type="button"
          className={`${btnClassLeft} left`}
          onClick={this.setActiveLeft}
        >
          Left
        </button>
        <button
          type="button"
          className={`${btnClassRight} right`}
          onClick={this.setActiveRight}
        >
          Right
        </button>
      </div>
    );
  }
}

//! решение 2
// BEGIN
export default class BtnGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: null };
  }

  selectLeft = () => this.setActive('left');

  selectRight = () => this.setActive('right');

  setActive = (active) => {
    this.setState({ active });
  }

  render() {
    const { active } = this.state;

    const sharedClasses = {
      btn: true,
      'btn-secondary': true,
    };

    const leftButtonClass = {
      ...sharedClasses,
      left: true,
      active: active === 'left',
    };

    const rightButtonClass = {
      ...sharedClasses,
      right: true,
      active: active === 'right',
    };

    return (
      <div className="btn-group" role="group">
        <button type="button" onClick={this.selectLeft} className={cn(leftButtonClass)}>Left</button>
        <button type="button" onClick={this.selectRight} className={cn(rightButtonClass)}>Right</button>
      </div>
    );
  }
}
// END


const mountNode = document.getElementById('root');
const root = ReactDOM.createRoot(mountNode);
root.render(<BtnGroup />);





// const response = {
//   data: {
//     type: 'photos',
//     id: '550e8400-e29b-41d4-a716-446655440000',
//     attributes: {
//       title: 'Ember Hamster',
//       src: 'http://example.com/images/productivity.png'
//     },
//     relationships: {
//       author: {
//         links: {
//           related: 'http://example.com/articles/1/author'
//         },
//       },
//     },
//     links: {
//       self: 'http://example.com/photos/550e8400-e29b-41d4-a716-446655440000'
//     },
//   },
// };

// const { links, attributes: andrey, relationships: { author } } = response.data;

// console.log(andrey)