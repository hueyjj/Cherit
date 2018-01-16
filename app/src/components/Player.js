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
      showYoutube,
      hideYoutube,
      setTrackVolume,
      library,
      track,
      } = this.props;
    const { duration, currentTime } = player;

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
          <div>
            {Math.floor(currentTime)} / {Math.floor(duration)}
          </div>
          <button onClick={play}>Play</button>
          <button onClick={pause}>Pause</button>
          <button onClick={stop}>Stop</button>
          <button onClick={togglePlayerLoop}>LoopTrack</button>
          <button onClick={togglePlayerQueueLoop}>Loop</button>
          <button onClick={shuffle}>Shuffle</button>
          <button onClick={nextTrack}>NextTrack</button>
          <button onClick={showYoutube}>ShowYoutube</button>
          <button onClick={hideYoutube}>HideYoutube</button>
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