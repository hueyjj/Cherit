import React, { Component } from 'react';

import "../styles/Seeker.css";

class Seeker extends Component {
  render() {
    const { player } = this.props;

    return (
      <div className="seeker-container">
        <div className="seeker-progress-bar">
          <div className="seeker-button">{player.currentTime}</div>
        </div>
      </div>
    );
  }
}

export default Seeker;