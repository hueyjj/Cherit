import React, { Component } from 'react';

import "../styles/TrackImage.css";

class TrackImage extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
  }

  render() {
    const { track } = this.props;
    const { image } = track;
    return (
      <div className="track-image">
        <img src={image}></img>
      </div>
    );
  }
}

export default TrackImage;