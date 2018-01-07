import React, { Component } from 'react';

class Root extends Component {
  render() {
    const { incCounter } = this.props;
    const { counter } = this.props.counter;

    return (
      <div className="root">
        <div>{counter}</div>
        <button onClick={incCounter}>+</button>
      </div>
    );
  }
}

export default Root;
