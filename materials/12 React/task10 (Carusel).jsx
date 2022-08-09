// Реализуйте компонент, эмулирующий работу слайдера. Компонент принимает на вход свойство images, в котором находится список путей до картинок. Компонент отображает их и позволяет с помощью стрелок "вперёд" и "назад" осуществлять переход по ним. Сам переход зациклен. Картинки (пути до них) могут повторятся.

// Ниже описано поведение:

// Если выбрана последняя картинка, то next ведёт на первую. То же самое происходит и prev, но в обратную сторону.
// Первая картинка становится активной. Порядок картинок и их отображение должны сохраняться.
// Начальная вёрстка с данными, которые прогружаются в файле src/index.jsx:

// <div id="carousel" class="carousel slide" data-bs-ride="carousel">
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img alt="" class="d-block w-100" src="/images/first.jpeg">
//     </div>
//     <div class="carousel-item">
//       <img alt="" class="d-block w-100" src="/images/second.jpeg">
//     </div>
//     <div class="carousel-item">
//       <img alt="" class="d-block w-100" src="/images/third.jpeg">
//     </div>
//   </div>
//   <button class="carousel-control-prev" data-bs-target="#carousel" type="button" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" data-bs-target="#carousel" type="button" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
// Хотя вёрстка и не тривиальная, единственное, что меняется в ней — класс active.

// Подсказки
// Carousel

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import classNames from 'classnames';
// import _ from 'lodash';
// // import './index.css';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    const { images } = props;
    this.state = {
      currentIdx: 0,
      // картинки могут повторяться, key должен быть уникальным
      images: images.map((url) => ({ url, key: uniqueId() })),
    };
  }

  setNext = (e) => {
    e.preventDefault();
    const { currentIdx, images } = this.state;
    const nextIdx = ((currentIdx + 1) % images.length);
    this.setState({ currentIdx: nextIdx });
  }

  setPrev = (e) => {
    e.preventDefault();
    const { currentIdx, images } = this.state;
    const prevIdx = ((currentIdx + (images.length - 1)) % images.length);
    this.setState({ currentIdx: prevIdx });
  }

  renderItems() {
    const { currentIdx, images } = this.state;
    return images.map(({ url, key }, id) => {
      const classes = cn({
        'carousel-item': true,
        active: currentIdx === id,
      });
      return (
        <div key={key} className={classes}>
          <img alt="" className="d-block w-100" src={url} />
        </div>
      );
    });
  }

  render() {
    return (
      <div id="carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {this.renderItems()}
        </div>
        <button data-bs-target="#carousel" className="carousel-control-prev" onClick={this.setPrev} type="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button data-bs-target="#carousel" className="carousel-control-next" onClick={this.setNext} type="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}

const images = ['../1.png', '../2.jpg', '../3.png', '../4.png'];

const mountNode = document.getElementById('root');
const root = ReactDOM.createRoot(mountNode);
root.render(<Carousel images={images}/>);
