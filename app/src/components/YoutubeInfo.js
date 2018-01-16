import React, { Component } from 'react';

import "../styles/YoutubeInfo.css";

class YoutubeInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { youtube } = this.props;
    const { info } = youtube;

    return (
      <div className="youtube-info-container">
        <span className="youtube-title">{info.title}</span>
        <div className="youtube-desc">{info.desc}</div>
      </div>
    );
  }
}

export default YoutubeInfo;