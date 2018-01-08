import React, { Component } from 'react';

import "../styles/Track.css";

class Track extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { index, track, onTrackClick } = this.props;
    onTrackClick(index);
  }

  render() {
    const { track } = this.props;
    return (
      <div className="track" onClick={this.onClick}>
        <li>{track.title}</li>
      </div>
    );
  }
}

export default Track;