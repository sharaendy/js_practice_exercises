// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import './index.css';

// import Card from './Card.jsx';

// const mountRoot = document.querySelector('#react-root');
// const content = ReactDOM.createRoot(mountRoot);
// content.render(<Card />);

//! решение 1
export default function getCard(obj) {
  const { title, text } = obj;

  if (title === undefined && text === undefined) {
    return null;
  }

  const jsx = (
    <div className="card">
      <div className="card-body">
        {title ? <h4 className="card-title">{title}</h4> : null}
        {text ? <p className="card-text">{text}</p> : null}
      </div>
    </div>
  );

  return jsx;
}

//! решение 2
export default ({ title, text }) => {
  if (!title && !text) {
    return null;
  }

  const titleDom = title && <h4 className="card-title">{title}</h4>;
  const textDom = text && <p className="card-text">{text}</p>;

  return (
    <div className="card">
      <div className="card-body">
        {titleDom}
        {textDom}
      </div>
    </div>
  );
};
