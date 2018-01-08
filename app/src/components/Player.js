import React, { Component } from 'react';

import "../styles/Player.css";

class Player extends Component {
  render() {
    const { play, stop } = this.props;
    return (
      <div className="player">
        <button onClick={play}>Play</button>
        <button onClick={stop}>Stop</button>
      </div>
    );
  }
}

export default Player;