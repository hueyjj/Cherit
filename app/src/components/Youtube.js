import React, { Component } from 'react';

import "../styles/Youtube.css";

import * as yt from "../utils/utils.youtube";

class Youtube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: null,
    }

    this.setImage = this.setImage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.input.value = "https://www.youtube.com/watch?v=3GyHt2jePAs";
  }

  setImage() {
    if (this.state.url) {

    }
  }

  async onSubmit(e) {
    e.preventDefault();
    await this.setState({ url: this.input.value });


    // Promise me to image in the future when it's done downloading
    (async () => {
      let image = await yt.downloadImage(this.state.url);
      const { setYoutubeImage } = this.props;
      setYoutubeImage(image);
    })();
  }

  render() {
    return (
      <div>
        Youtube
        <form
          onSubmit={this.onSubmit}
        >
          <input
            ref={(input) => { this.input = input; }}
            id="youtube-input"
            placeholder="enter youtube url"
            type="text"
          />
        </form>
        <div>
          metadata
        </div>
      </div>
    );
  }
}

export default Youtube;