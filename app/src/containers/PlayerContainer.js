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

const PlayerContainer = (props) => {
  return (
    <Player {...props} />
  );
};

const mapStateToProps = (state) => {
  const { player, library } = state;

  return {
    player,
    library,
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
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);