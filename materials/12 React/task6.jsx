import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';


//! решение 1
export default class Progress extends React.Component {
  render() {
    const { percentage } = this.props;
    const width = {
      width: `${{ percentage }}%`,
    };

    return (
      <React.Fragment>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={percentage}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="progressbar"
            style={width}
          ></div>
        </div>
      </React.Fragment>
    );
  }
}

const mountNode = document.getElementById('container');
const root = ReactDOM.createRoot(mountNode);
root.render(<Progress percentage={40} />);


//! решение 2
// BEGIN
export default class Progress extends React.Component {
  render() {
    const { percentage } = this.props;
    return (
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${percentage}%` }}
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="progressbar"
        />
      </div>
    );
  }
}
// END