import React from 'react';
import { connect } from 'react-redux';

import TrackList from '../components/TrackList';

const TrackListContainer = (props) => { 
  return (
    <TrackList {...props} />
  );
};

const mapStateToProps = (state) => { 
  const { library } = state;
  const { tracklist } = library;
  return {
    tracklist,
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackListContainer);