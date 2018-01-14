import React, { Component } from 'react';

import "../styles/Volume.css";

class Volume extends Component {
  constructor(props) {
    super(props);
    this.progress = 0;
    this.getStyle = this.getStyle.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  getStyle() {
    const { track } = this.props;
    this.progress = track.volume;
    console.log(this.progress);
    return {
      transform: 'scaleX(' + this.progress + ')',
    }
  }

  onClick(e) {
    let containerSpecs = this.container.getBoundingClientRect(),
      x = e.clientX - containerSpecs.left;

    let rate = x / containerSpecs.width;
    const { setTrackVolume } = this.props;
    setTrackVolume(rate);
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