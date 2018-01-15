import React, { Component } from 'react';

import "../styles/Volume.css";

import {
  TRACK_DEFAULT_VOLUME,
  TRACK_VOLUME_REDUCTION_RATE
} from "../constants/TrackConstants";

class Volume extends Component {
  constructor(props) {
    super(props);
    this.progress = TRACK_DEFAULT_VOLUME;
    this.mouseDown = false;
    this.mouseLeft = false;
    this.mouseIsOutside = false;

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
      if (this.mouseDown) {
        this.mouseDown = false;
        this.onMouseUp(e);
      }
    }).bind(this);

    let mouseMoveFn = ((e) => {
      if (this.mouseDown) {
        this.onClick(e);
      }
    }).bind(this);

    document.addEventListener('mouseup', mouseUpFn, true);
    document.addEventListener('mousemove', mouseMoveFn, false);
  }

  getStyle() {
    const { track } = this.props;
    return {
      transform: 'scaleX(' + this.progress + ')',
    }
  }

  onClick(e) {
    let containerSpecs = this.container.getBoundingClientRect(),
      x = e.clientX - containerSpecs.left;

    let rate = x / containerSpecs.width;
    if (rate >= 1) return;

    this.progress = rate;

    const { setTrackVolume } = this.props;
    setTrackVolume(rate * TRACK_VOLUME_REDUCTION_RATE);
  }

  onMouseMove(e) {
    e.preventDefault();
    if (this.mouseDown) {
      this.onClick(e);
    }
  }

  onMouseDown(e) {
    e.preventDefault();
    this.container.focus();
    this.mouseDown = true;
  }

  onMouseUp(e) {
    this.container.focus();
    this.mouseDown = false;
  }

  onMouseEnter(e) {
    this.mouseLeave = false;
  }

  onMouseLeave(e) {
    this.mouseLeave = true;
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