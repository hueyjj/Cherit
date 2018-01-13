import React, { Component } from 'react';

import "../styles/Player.css";

import Seeker from "../components/Seeker";

class Player extends Component {
  render() {
    const { player, play, stop, pause, loop, shuffle } = this.props;
    return (

      <div className="player-container">
        <Seeker player={player} />
        <div className="player-controllers">
          <button onClick={play}>Play</button>
          <button onClick={pause}>Pause</button>
          <button onClick={stop}>Stop</button>
          <button onClick={loop}>Loop</button>
          <button onClick={shuffle}>Shuffle</button>
        </div>
      </div>
    );
  }
}

export default Player;