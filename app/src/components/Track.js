import React, { Component } from 'react';

import "../styles/Track.css";

class Track extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastFired: 0,
      doubleClickTime: 300, // 300ms

    }

    this.onClick = this.onClick.bind(this);
    this.getStyle = this.getStyle.bind(this);
  }

  onClick(event) {
    event.preventDefault();
    event.stopPropagation();

    let timeNow = performance.now();

    // Perform double click within a time frame.
    if (timeNow - this.state.lastFired <= this.state.doubleClickTime) {
      const { jumpToTrack, index } = this.props;
      jumpToTrack(index);
    } else {
      const { trackInfo, index, setTrack } = this.props;
      setTrack(trackInfo, index);
    }
    this.setState({ lastFired: timeNow });
  }

  getStyle() {
    const { track, index } = this.props;
    const { audio } = track;

    if (audio && audio.index == index)
      return { background: '#243577' };

    return track.index == index ? { background: 'rgba(255, 255,255, 0.3)' } : {};
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