import '../style/Square.css';
import React from 'react';

class Square extends React.Component {
  render() {
    return (
      <div
        className="square"
        id={`square${this.props.id + 1}`}
        onClick={() => this.props.onClick(this.props.id)}
      >
        {this.props.move}
      </div>
    );
  }
}

export default Square;
