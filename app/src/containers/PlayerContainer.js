import React from 'react';
import { connect } from 'react-redux';

import Player from "../components/Player";
import {
  play,
  stop,
  pause,
  togglePlayerLoop,
  togglePlayerQueueLoop,
  shuffle,
  seek,
  nextTrack,
} from "../actions/PlayerActions";

import {
  setTrackVolume,
} from "../actions/TrackActions";

const PlayerContainer = (props) => {
  return (
    <Player {...props} />
  );
};

const mapStateToProps = (state) => {
  const { player, library, track } = state;

  return {
    player,
    library,
    track,
  }
};

const mapDispatchToProps = {
  play,
  stop,
  pause,
  togglePlayerLoop,
  togglePlayerQueueLoop,
  shuffle,
  seek,
  nextTrack,
  setTrackVolume,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);