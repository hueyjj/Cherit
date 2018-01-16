import React, { Component } from 'react';

import "../styles/Youtube.css";

import YoutubeImage from "../components/YoutubeImage";
import YoutubeInfo from "../components/YoutubeInfo";
import { setYoutubeImage } from '../actions/YoutubeActions';
import * as yt from "../utils/utils.youtube";

class Youtube extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      info: null,
      url: null,
      base64Image: null,
    }

    this.componentDidUpdate = this.componentDidUpdate.bind(this);

    this.onKeyUp = this.onKeyUp.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    this.getYoutubeInfo = this.getYoutubeInfo.bind(this);
    this.setYoutubeImage = this.setYoutubeImage.bind(this);
    this.setYoutubeMetaInfo = this.setYoutubeMetaInfo.bind(this);
  }

  componentDidUpdate() {
    if (!this.state.visible && this.container) {
      this.setState({ visible: true });
      this.container.focus();
    }
  }

  async onKeyUp(e) {
    // ESC key
    if (27 == e.keyCode) {
      this.setState({ visible: false });
      this.props.hideYoutube();
    } else if (this.input && yt.YtRegExp.test(this.input.value)) {
      await this.setState({ url: this.input.value });
      this.setYoutubeInfo();
    }
  }

  onKeyDown(e) {
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
    const { youtube, hideYoutube } = this.props;
    const { shouldShow } = youtube;

    return shouldShow ?
      (
        <div
          className="youtube-container-background"
          tabIndex="0"
          ref={(input) => { this.container = input; }}
          onClick={hideYoutube}
          onKeyDown={this.onKeyDown}
          onKeyUp={this.onKeyUp}
        >
          <div
            className="youtube-container"
            onClick={(e) => { e.stopPropagation(); }} // Can stop EVERY children from sending their onClick back to youtube-container-background
          >
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
        </div >
      )
      :
      (
        null
      );
  }
}

export default Youtube;