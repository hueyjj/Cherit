import React, { Component } from 'react';

import '../styles/Root.css';

import TrackListContainer from '../containers/TrackListContainer';
import LibraryControllerContainer from '../containers/LibraryControllerContainer';
import PlayerContainer from '../containers/PlayerContainer';

class Root extends Component {
  render() {
    return (
      <div className="root">
        <LibraryControllerContainer />
        <PlayerContainer />
        <TrackListContainer />
      </div>
    );
  }
}

export default Root;
