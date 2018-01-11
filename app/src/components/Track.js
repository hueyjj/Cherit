import React, { Component } from 'react';

import "../styles/Track.css";

class Track extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onDoubleClick = this.onDoubleClick.bind(this);
  }

  onClick() {
    const { trackInfo, index, setTrack } = this.props;
    setTrack(trackInfo, index);
  }

  onDoubleClick() {
    this.onClick();
    const { play } = this.props;
    play();
  }

  render() {
    const { trackInfo } = this.props;
    return (
      <div
        className="track-container"
        onClick={this.onClick}
        onDoubleClick={this.onDoubleClick}>
        <li className="track">{trackInfo.title}</li>
      </div>
    );
  }
}

export default Track;