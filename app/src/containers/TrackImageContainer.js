import React from 'react';
import { connect } from 'react-redux';

import TrackImage from '../components/TrackImage';

const TrackListContainer = (props) => {
  return (
    <TrackImage {...props} />
  );
};

const mapStateToProps = (state) => {
  const { track } = state;

  return {
    track,
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackListContainer);