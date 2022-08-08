// Реализуйте компонент Alert, который отрисовывает алерт бутстрапа. Компонент принимает на вход два свойства:

// text - отображаемый текст
// type - тип алерта, может принимать одно из следующих значений: primary, secondary, success, danger, warning, info, light, dark;
// Пример использования:

// <Alert type="warning" text="what is love?" />;
// Вывод:

// <div class="alert alert-warning" role="alert">what is love?</div>

import React from 'react';
import ReactDOM from 'react-dom/client';
import cn from 'classnames';

// import App from './App.jsx';
import './index.css';
import './App.css';

//! решение 1
class Alert extends React.Component {
  render() {
    const { text, type } = this.props;
    const attributes = cn({
      'alert': true,
      [`alert-${type}`]: true,
    });
    
    return (
      <div className={attributes} role="alert">{text}</div>
      )
    }
  }
  
  const mountRoot = document.querySelector('#root');
  const root = ReactDOM.createRoot(mountRoot);
  root.render(<Alert type="warning" text="what is love?" />);


  //! решение 2
  export default class Alert extends React.Component {
    render() {
      const { type, text } = this.props;
  
      const alertClass = cn('alert', `alert-${type}`);
  
      return (
        <div className={alertClass} role="alert">
          {text}
        </div>
      );
    }
  }