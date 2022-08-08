import React from 'react';
import ReactDOM from 'react-dom/client';
import classNames from 'classnames';
import _ from 'lodash';
// import './index.css';

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
