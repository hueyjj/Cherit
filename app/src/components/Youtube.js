import React, { Component } from 'react';

import "../styles/Youtube.css";

import YoutubeImage from "../components/YoutubeImage";
import YoutubeInfo from "../components/YoutubeInfo";
import * as yt from "../utils/utils.youtube";
import { setYoutubeImage } from '../actions/YoutubeActions';

class Youtube extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: null,
      url: null,
      base64Image: null,
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.getYoutubeInfo = this.getYoutubeInfo.bind(this);
    this.setYoutubeImage = this.setYoutubeImage.bind(this);
    this.setYoutubeMetaInfo = this.setYoutubeMetaInfo.bind(this);
  }

  componentDidMount() {
    this.input.value = "https://www.youtube.com/watch?v=3GyHt2jePAs";
  }

  async onSubmit(e) {
    e.preventDefault();
    await this.setState({ url: this.input.value });
    this.setYoutubeInfo();
  }

  async getYoutubeInfo() {
    let info = await yt.fetchYoutubeInfo(this.state.url);
    return info;
  }

  async setYoutubeInfo() {
    let info = await this.getYoutubeInfo();
    if (info) {
      console.log(info);
      await this.setState({ info: info });
      this.setYoutubeImage();
      this.setYoutubeMetaInfo();
    }
    //TODO something to tell user that we can't get the information
  }

  async setYoutubeImage() {
    let imageUrl = this.state.info.thumbnail;
    yt.downloadImage(imageUrl)
      .then((data) => {
        if (data) this.setState({ base64Image: data });
        else this.setState({ base64Image: null });
      })
  }

  async setYoutubeMetaInfo() {
    const { setYoutubeInfo } = this.props;
    setYoutubeInfo({
      title: this.state.info.fulltitle,
      desc: this.state.info.description,
    });
  }

  render() {
    const { youtube } = this.props;
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
          <YoutubeImage
            src={this.state.base64Image}
          />
          <YoutubeInfo
            youtube={youtube}
          />
        </div>
      </div>
    );
  }
}

export default Youtube;