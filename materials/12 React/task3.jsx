// В этой практике не будет визуальной составляющей. Задача заключается в том, что необходимо правильно написать функцию возвращающую jsx.

// src/Card.jsx
// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход объект со свойствами title и text, и возвращает jsx с подставленными значениями. Пример:

// import getCard from './Card.jsx';

// getCard({ title: 'hi', text: 'how are you?' });
// // <div className="card">
// //   <div className="card-body">
// //     <h4 className="card-title">hi</h4>
// //     <p className="card-text">how are you?</p>
// //   </div>
// // </div>
// Если title отсутствует, то соответствующий ему кусок dom не отрисовывается, то же самое справедливо и для text. Если отсутствуют оба свойства, то из функции необходимо вернуть null.

//! 1
// @ts-check
/* eslint-disable react/display-name */
import React from 'react';

// BEGIN (write your solution here)
export default function getCard(props) {
  const { title, text } = props;
  
  if (!title && !text) {
    return null;
  }

  const vTitle = title && <h4 className="card-title">{title}</h4>;
  const vText = text && <p className="card-text">{text}</p>;

  const vdom = (
    <div className="card">
      <div className="card-body">
        {vTitle}
        {vText}
      </div>
    </div>
  );

  return vdom;
}
// END