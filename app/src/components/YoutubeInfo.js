import React, { Component } from 'react';

import "../styles/YoutubeInfo.css";

class YoutubeInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { info, visible } = this.props;

    if (visible)
      return (
        <div className="youtube-info-container">
          <span className="youtube-title">{info.title}</span>
          <div className="youtsube-desc">{info.desc}</div>
        </div>
      );
    return (null);
  }
}

export default YoutubeInfo;