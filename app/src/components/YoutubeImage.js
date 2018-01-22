import React, { Component } from 'react';

import "../styles/YoutubeImage.css";

class YoutubeImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { src } = this.props;

    if (src)
      return (
        <div className="youtube-image-container">
          <img className="youtube-image" src={src}></img>
        </div>
      );
    return (null);
  }
}

export default YoutubeImage;