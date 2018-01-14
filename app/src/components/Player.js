import React, { Component } from 'react';

import "../styles/Player.css";

import Seeker from "../components/Seeker";
import Volume from "../components/Volume";

class Player extends Component {
  render() {
    const {
      player,
      play,
      stop,
      pause,
      togglePlayerLoop,
      togglePlayerQueueLoop,
      shuffle,
      seek,
      nextTrack,
      setTrackVolume,      
      library,
      track,
      } = this.props;

    return (
      <div className="player-container">
        <Seeker
          player={player}
          track={track}
          seek={seek}
          play={play}
          pause={pause}
        />
        <div className="player-controllers">
          <button onClick={play}>Play</button>
          <button onClick={pause}>Pause</button>
          <button onClick={stop}>Stop</button>
          <button onClick={togglePlayerLoop}>LoopTrack</button>
          <button onClick={togglePlayerQueueLoop}>Loop</button>
          <button onClick={shuffle}>Shuffle</button>
          <button onClick={nextTrack}>NextTrack</button>
          {library.trackList.length} tracks
          <Volume
            track={track}
            setTrackVolume={setTrackVolume}
          />
        </div>
      </div>
    );
  }
}

export default Player;