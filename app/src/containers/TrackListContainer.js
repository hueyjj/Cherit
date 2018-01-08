import React from 'react';
import { connect } from 'react-redux';

import TrackList from '../components/TrackList';
import { onTrackClick } from "../actions/TrackActions";

const TrackListContainer = (props) => {
  return (
    <TrackList {...props} />
  );
};

const mapStateToProps = (state) => {
  const { library } = state;
  const { trackList } = library;

  return {
    trackList,
  };
};

const mapDispatchToProps = {
  onTrackClick,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackListContainer);