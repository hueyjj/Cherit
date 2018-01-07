import React, { Component } from 'react';

import '../styles/Root.css';

import TrackListContainer from '../containers/TrackListContainer';
import LibraryControllerContainer from '../containers/LibraryControllerContainer';


class Root extends Component {
  render() {
    return (
      <div className="root">
        <LibraryControllerContainer />
        <TrackListContainer />
      </div>
    );
  }
}

export default Root;
