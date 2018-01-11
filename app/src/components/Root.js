import React, { Component } from 'react';

import '../styles/Root.css';

import TrackListContainer from '../containers/TrackListContainer';
import LibraryControllerContainer from '../containers/LibraryControllerContainer';
import PlayerContainer from '../containers/PlayerContainer';
import TrackImageContainer from '../containers/TrackImageContainer';

class Root extends Component {
  render() {
    return (
      <div className="root">
        <LibraryControllerContainer />
        <div className="wrapper-2">
          <TrackImageContainer />
          <TrackListContainer />
        </div>
        <div className="wrapper-3">
          <PlayerContainer />
        </div>
      </div>
    );
  }
}

export default Root;
