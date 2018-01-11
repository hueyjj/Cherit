import React, { Component } from 'react';

import "../styles/Player.css";

class Player extends Component {
  render() {
    const { play, stop, pause, loop, shuffle} = this.props;
    return (
      <div className="player">
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
        <button onClick={stop}>Stop</button>
        <button onClick={loop}>Loop</button>
        <button onClick={shuffle}>Shuffle</button>
      </div>
    );
  }
}

export default Player;