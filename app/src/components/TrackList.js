import React, { Component } from 'react';

import "../styles/TrackList.css";

import Track from "../components/Track";

class TrackList extends Component {
  constructor(props) {
    super(props);
    this.createTrackList = this.createTrackList.bind(this);
  }

  createTrackList() {
    const { trackList } = this.props;
    return trackList.map((track, i) => {
      return (
        <Track track={track} key={`${track.title}-${i}`} />
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