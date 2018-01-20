import React, { Component } from 'react';

import "../styles/Player.css";
import PlaySvg from "../assets/play.svg";

import Button from "../components/Button";
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
    let s = {
      backgroundImage: 'url(./src/assets/play.svg'
    }
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

          <div
            className="player-button play-button"
            onClick={play}
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 700.000000 700.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,700.000000) scale(0.100000,-0.100000)"
                stroke="none"
              >
                <path d="M590 3500 c0 -2288 3 -3350 10 -3350 6 0 882 503 1948 1119 1065 615 2367 1367 2892 1670 525 303 955 556 955 561 0 5 -648 384 -1440 841 -792 457 -2093 1209 -2892 1670 -799 462 -1457 839 -1463 839 -7 0 -10 -1048 -10 -3350z"></path>
              </g>
            </svg>
          </div>

          <button onClick={pause}>
            Pause
          </button>
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
      </div >
    );
  }
}

export default Player;