import React, { Component } from 'react';

import "../styles/Volume.css";

import {
  TRACK_DEFAULT_VOLUME,
} from "../constants/TrackConstants";

class Volume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: TRACK_DEFAULT_VOLUME,
      mouseDown: false,
      mouseLeft: false,
      mouseIsOutside: false,
    }

    this.componentWillMount = this.componentWillMount.bind(this);
    this.getStyle = this.getStyle.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  componentWillMount() {
    let mouseUpFn = ((e) => {
      if (this.state.mouseDown) {
        this.setState({ mouseDown: false });
        this.onMouseUp(e);
      }
    }).bind(this);

    let mouseMoveFn = ((e) => {
      if (this.state.mouseDown) {
        this.onClick(e);
      }
    }).bind(this);

    document.addEventListener('mouseup', mouseUpFn, true);
    document.addEventListener('mousemove', mouseMoveFn, false);
  }

  getStyle() {
    const { track } = this.props;
    return {
      transform: 'scaleX(' + this.state.progress + ')',
    }
  }

  async onClick(e) {
    let containerSpecs = this.container.getBoundingClientRect(),
      x = e.clientX - containerSpecs.left;

    let rate = x / containerSpecs.width;
    if (rate < 0 || rate > 1) return;

    this.setState({ progress: rate });
    
    const { setTrackVolume } = this.props;

    // Change the formula for log function for audio if necessary
    rate = Math.pow(rate, 3);
    setTrackVolume(rate);
  }

  onMouseMove(e) {
    e.preventDefault();
    if (this.state.mouseDown) {
      this.onClick(e);
    }
  }

  onMouseDown(e) {
    e.preventDefault();
    this.container.focus();
    this.setState({ mouseDown: true });
  }

  onMouseUp(e) {
    this.container.focus();
    this.setState({ mouseDown: false });
  }

  onMouseEnter(e) {
    this.setState({ mouseLeft: false });
  }

  onMouseLeave(e) {
    this.setState({ mouseLeft: true });
  }

  render() {
    return (
      <div
        className="volume-container"
        ref={(input) => { this.container = input; }}
        onClick={this.onClick}
        onMouseMove={this.onMouseMove}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <div
          className="volume-progress-bar"
          style={this.getStyle()}
        >
        </div>
      </div>
    );
  }
}

export default Volume;