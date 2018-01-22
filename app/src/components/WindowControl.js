import React, { Component } from 'react';

import "../styles/WindowControl.css";

import LibraryControllerContainer from "../containers/LibraryControllerContainer";
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
    const { app } = this.props;
    return (
      <div
        className="window-control-container"
        ref={(input) => { this.container = input; }}
      >
        <div className="window-title-container">
          <span className="window-title">{app.title}</span>
        </div>

        <div
          className="window-buttons window-close"
          onClick={close}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
          >
            <line
              x2="11.5"
              y2="11.5"
              x1="0"
              y1="1"
              strokeWidth="1.5"
            />
            <line
              x2="0"
              y2="11.5"
              x1="11.5"
              y1="1"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        <div
          className="window-buttons window-max"
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
          className="window-buttons window-min"
          onClick={minimize}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
          >
            <rect
              width="11.5"
              height="1"
              x="1.5"
              y="6.5"
            />
          </svg>
        </div>

      </div >
    );
  }
}

export default WindowControl;