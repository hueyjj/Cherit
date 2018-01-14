import React, { Component } from 'react';

import "../styles/Track.css";

class Track extends Component {
  constructor(props) {
    super(props);
    this.lastFired = 0;
    this.doubleClickTime = 300; // 300ms
    this.onClick = this.onClick.bind(this);
    this.getStyle = this.getStyle.bind(this);
  }

  onClick(event) {
    event.preventDefault();
    event.stopPropagation();

    let timeNow = performance.now();

    // Perform double click within a time frame.
    if (timeNow - this.lastFired <= this.doubleClickTime) {
      const { jumpToTrack, index } = this.props;
      jumpToTrack(index);
    } else {
      const { trackInfo, index, setTrack } = this.props;
      setTrack(trackInfo, index);
    }
    this.lastFired = timeNow;
  }

  getStyle() {
    const { track, index } = this.props;
    return track.index == index ? { background: 'lightgreen', } : {};
  }

  render() {
    const { trackInfo } = this.props;
    return (
      <div
        className="track-container"
        onClick={this.onClick}
        ref={(input) => { this.container = input; }}
        style={this.getStyle()}
      >
        <li className="track">{trackInfo.title}</li>
      </div >
    );
  }
}

export default Track;