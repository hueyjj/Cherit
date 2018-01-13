import React, { Component } from 'react';

import "../styles/Seeker.css";

class Seeker extends Component {
  constructor(props) {
    super(props);
    this.progress = 0;
    this.getProgress = this.getProgress.bind(this);
  }

  getProgress() {
    const { player } = this.props;
    this.progress = player.currentTime / player.duration;
    return {
      transform: 'scaleX(' + this.progress + ')',
    };
  }

  render() {
    return (
      <div className="seeker-container">
        <div className="seeker-progress-bar" style={this.getProgress()}>
          <div className="seeker-button"></div>
        </div>
      </div>
    );
  }
}

export default Seeker;