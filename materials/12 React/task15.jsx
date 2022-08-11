// src/Card.jsx
// Реализуйте компонент <Card> так, чтобы можно составлять такую структуру:

// <Card>
//   <Card.Body>
//     <Card.Title>Title</Card.Title>
//     <Card.Text>Text</Card.Text>
//   </Card.Body>
// </Card>
// Получившийся HTML:

// <div class="card">
//   <div class="card-body">
//     <h4 class="card-title">Title</h4>
//     <p class="card-text">Text</p>
//   </div>
// </div>

//! решение 1
import React from 'react';

// BEGIN (write your solution here)
const Title = ({ children }) => <h4 className="card-title">{children}</h4>;
const Text = ({ children }) => <p className="card-text">{children}</p>;
const Body = ({ children }) => <div className="card-body">{children}</div>;

export default class Card extends React.Component {
  static Title = Title;

  static Text = Text;

  static Body = Body;

  render() {
    const { children } = this.props;
    return <div className="card">{children}</div>;
  }
}
// END


//! решение 2 (эталон)
// BEGIN
const Body = ({ children }) => <div className="card-body">{children}</div>;
const Title = ({ children }) => <h4 className="card-title">{children}</h4>;
const Text = ({ children }) => <p className="card-text">{children}</p>;

export default class Card extends React.Component {
  static Body = Body;

  static Title = Title;

  static Text = Text;

  render() {
    const { children } = this.props;
    return <div className="card">{children}</div>;
  }
}
// END