import React, { Component } from 'react';

import "../styles/TrackList.css";

import Track from "../components/Track";

class TrackList extends Component {
  constructor(props) {
    super(props);
    this.createTrackList = this.createTrackList.bind(this);
  }

  createTrackList() {
    const { trackList, setTrack, play, track } = this.props;
    return trackList
      ? trackList.map((trackInfo, index) => {
        return (
          <Track
            key={`${trackInfo.title}-${index}`}
            index={index}
            trackInfo={trackInfo}
            setTrack={setTrack}
            play={play}
          />
        );
      })
      : "";
  }

  render() {
    return (
      <div className="track-list-container">
        <ul className="track-list">
          {this.createTrackList()}
        </ul>
      </div>
    );
  }
}

export default TrackList;