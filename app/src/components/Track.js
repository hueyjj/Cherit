import React, { Component } from 'react';

import "../styles/Track.css";

class Track extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { trackInfo, index, onTrackClick } = this.props;
    onTrackClick(trackInfo, index);
  }

  render() {
    const { trackInfo } = this.props;
    return (
      <div className="track" onClick={this.onClick}>
        <li>{trackInfo.title}</li>
      </div>
    );
  }
}

export default Track;