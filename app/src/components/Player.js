import React, { Component } from 'react';

import "../styles/Player.css";

import Seeker from "../components/Seeker";

class Player extends Component {
  render() {
    const {
      player,
      play,
      stop,
      pause,
      toggleTrackLoop,
      toggleTrackQueueLoop,
      shuffle,
      seek,
      nextTrack,
      } = this.props;

    return (
      <div className="player-container">
        <Seeker
          player={player}
          seek={seek}
        />
        <div className="player-controllers">
          <button onClick={play}>Play</button>
          <button onClick={pause}>Pause</button>
          <button onClick={stop}>Stop</button>
          <button onClick={toggleTrackLoop}>LoopTrack</button>
          <button onClick={toggleTrackQueueLoop}>Loop</button>
          <button onClick={shuffle}>Shuffle</button>
          <button onClick={nextTrack}>NextTrack</button>
        </div>
      </div>
    );
  }
}

export default Player;