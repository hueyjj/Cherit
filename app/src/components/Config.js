import React, { Component } from 'react';

import "../styles/Config.css";

class Config extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    }

    this.componentDidUpdate = this.componentDidUpdate.bind(this);

    this.onKeyUp = this.onKeyUp.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.libClick = this.libClick.bind(this);
  }

  componentDidUpdate() {
    const { config } = this.props;
    const { visible } = config;

    // Component's visible state keeps track if this is the first time (each click) this component was shown
    if (!this.state.visible && this.container) {
      this.state.visible = true;
      this.container.focus();
    } else if (!visible) {
      // Switch visibilty checker off when exiting pop up
      this.state.visible = false;
    }
  }

  onKeyUp(e) {
    // ESC
    if (27 == e.keyCode) {
      this.props.hideMenu();
    }
  }

  onKeyDown(e) {
  }

  libClick(e) {
    const { loadLibrary } = this.props;
    loadLibrary(null);
  }

  render() {
    const { config, hideMenu } = this.props;

    return config.visible ?
      (
        <div
          className="config-background"
          tabIndex="0"
          ref={(input) => { this.container = input; }}
          onClick={hideMenu}
          onKeyDown={this.onKeyDown}
          onKeyUp={this.onKeyUp}
        >
          <div
            className="config-container"
            onClick={(e) => { e.stopPropagation(); }} // Can stop EVERY children from sending their onClick back to youtube-container-background
          >
            <div
              className="load-library-container"
              onClick={this.libClick}
            >
            Load Library
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

export default Config;