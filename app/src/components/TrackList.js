import React, { Component } from 'react';

import "../styles/TrackList.css";

class TrackList extends Component {
  constructor(props) {
    super(props);
    this.createTrackList = this.createTrackList.bind(this);
  }

  createTrackList() {
    const { trackList } = this.props;
    return trackList.map((track, i) => {
      console.log(track);
      return (
        <li key={`${track.title}-${i}`}>{track.title}</li>
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