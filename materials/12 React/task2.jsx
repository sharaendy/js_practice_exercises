// src/Card.jsx
// Реализуйте компонент Card, возвращающий следующий jsx:

// <div className="card">
//   <div className="card-body">
//     <h4 className="card-title">Card title</h4>
//     <p className="card-text">Some quick example text to build on the card</p>
//     <button type="button" className="btn btn-primary">Go somewhere</button>
//   </div>
// </div>
// src/index.jsx
// Импортируйте Card.jsx и отрисуйте компонент внутри dom элемента с id равным container

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
