import React, { Component } from 'react';

import "../styles/YoutubeInfo.css";

class YoutubeInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { info } = this.props;

    if (info && info.title && info.desc)
      return (
        <div className="youtube-info-container">
          <div className="youtube-desc">{info.desc}</div>
        </div>
      );
    return (null);
  }
}

export default YoutubeInfo;