import React, { Component } from 'react';

import "../styles/TrackList.css";

class TrackList extends Component {
  constructor(props) {
    super(props);
    this.createTrackList = this.createTrackList.bind(this);
  }

  createTrackList() {
    const { tracklist } = this.props;
    return tracklist.map((track, i) => {
      return (
        <li key={`${track.name}-${i}`}>{track.name}</li>
      );
    });
  }

  render() {
    return (
      <div className="track-list">
        <ul>
          {this.createTrackList()}
        </ul>
      </div>
    );
  }
}

export default TrackList;