import React, { Component } from 'react';

import "../styles/Track.css";

class Track extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { track } = this.props;
    return (
      <div className="track" >
        <li>{track.title}</li>
      </div>
    );
  }
}

export default Track;