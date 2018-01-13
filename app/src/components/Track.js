import React, { Component } from 'react';

import "../styles/Track.css";

class Track extends Component {
  constructor(props) {
    super(props);
    this.lastFired = 0;
    this.doubleClickTime = 300; // 300ms
    this.onClick = this.onClick.bind(this);
    //this.onDoubleClick = this.onDoubleClick.bind(this);
  }

  onClick(event) {
    event.preventDefault();
    event.stopPropagation();

    let timeNow = performance.now();

    // Perform double click if within 
    if (timeNow - this.lastFired <= this.doubleClickTime) {
      const { play } = this.props;
      play();
    } else {
      const { trackInfo, index, setTrack } = this.props;
      setTrack(trackInfo, index);
    }
    this.lastFired = timeNow;
  }

  // onDoubleClick(event) {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   console.log(event);
  //   console.log("double clicked");
  //   const { play } = this.props;
  //   play();
  // }

  render() {
    const { trackInfo } = this.props;
    return (
      <div
        className="track-container"
        onClick={this.onClick}
      >
        <li className="track">{trackInfo.title}</li>
      </div >
    );
  }
}

export default Track;