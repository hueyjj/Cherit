import React, { Component } from 'react';

import "../styles/Seeker.css";

class Seeker extends Component {
  constructor(props) {
    super(props);
    this.progress = 0;
    this.getProgress = this.getProgress.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  getProgress() {
    const { player } = this.props;
    this.progress = player.currentTime / player.duration;
    return {
      transform: 'scaleX(' + this.progress + ')',
    };
  }

  onClick(e) {
    let containerSpecs = this.container.getBoundingClientRect(),
      x = e.clientX - containerSpecs.left;

    let progressRate = x / containerSpecs.width;
    const { seek, player } = this.props;
    seek(player.duration * progressRate);
  }

  render() {
    return (
      <div
        className="seeker-container"
        ref={(input) => { this.container = input; }}
        onClick={this.onClick}
      >
        <div
          className="seeker-progress-bar"
          style={this.getProgress()}
        >
          <div className="seeker-button"></div>
        </div>
      </div>
    );
  }
}

export default Seeker;