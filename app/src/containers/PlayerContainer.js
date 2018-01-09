import React from 'react';
import { connect } from 'react-redux';

import Player from "../components/Player";
import { play, stop, pause } from "../actions/PlayerActions";

const PlayerContainer = (props) => { 
  return (
    <Player {...props} />
  );
};

const mapStateToProps = (state) => { 
  const { player } = state;

  return {
    player,
  }
};

const mapDispatchToProps = {
  play,
  stop,
  pause,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);