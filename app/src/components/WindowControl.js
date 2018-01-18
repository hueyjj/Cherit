import React, { Component } from 'react';

import "../styles/WindowControl.css";

import { minimize, unmaximize, maximize, close } from "../utils/utils.win";

class WindowControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMaximized: false,
    }

    this.onClickMax = this.onClickMax.bind(this);
  }

  onClickMax(e) {
    if (this.state.isMaximized) {
      this.setState({ isMaximized: false });
      unmaximize();
    } else {
      this.setState({ isMaximized: true });
      maximize();
    }
  }

  render() {
    const { } = this.props;
    return (
      <div
        className="window-control-container"
        ref={(input) => { this.container = input; }}
      >
        <div
          className="window-title">
        </div>

        <div className="window-buttons">
          <div
            className="window-min"
            onClick={minimize}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <rect
                width="11"
                height="1"
                x="1.5"
                y="10"
              />
            </svg>
          </div>
          <div
            className="window-max"
            onClick={this.onClickMax}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
            >
              <rect
                width="10"
                height="10"
                x="1.5"
                y="1.5"
              />
            </svg>
          </div>
          <div
            className="window-close"
            onClick={close}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <line
                x2="12"
                y2="11"
                x1="0"
                y1="0"
                strokeWidth="1.5"
              />
              <line
                x2="0"
                y2="11"
                x1="12"
                y1="0"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>
      </div >
    );
  }
}

export default WindowControl;