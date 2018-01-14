import React, { Component } from 'react';

import "../styles/Volume.css";

import {
  TRACK_DEFAULT_VOLUME,
  TRACK_VOLUME_REDUCTION_RATE
} from "../constants/TrackConstants";

class Volume extends Component {
  constructor(props) {
    super(props);
    this.progress = TRACK_DEFAULT_VOLUME;
    this.getStyle = this.getStyle.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  getStyle() {
    const { track } = this.props;
    return {
      transform: 'scaleX(' + this.progress + ')',
    }
  }

  onClick(e) {
    let containerSpecs = this.container.getBoundingClientRect(),
      x = e.clientX - containerSpecs.left;

    let rate = x / containerSpecs.width;
    this.progress = rate;
    
    const { setTrackVolume } = this.props;
    setTrackVolume(rate * TRACK_VOLUME_REDUCTION_RATE);
  }

  render() {
    return (
      <div
        className="volume-container"
        ref={(input) => { this.container = input; }}
        onClick={this.onClick}
      >
        <div
          className="volume-progress-bar"
          style={this.getStyle()}
        >
        </div>
      </div>
    );
  }
}

export default Volume;