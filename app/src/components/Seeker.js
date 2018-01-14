import React, { Component } from 'react';

import "../styles/Seeker.css";

class Seeker extends Component {
  constructor(props) {
    super(props);
    this.progress = 0;
    this.mouseDown = false;

    this.getStyle = this.getStyle.bind(this);
    this.updateProgress = this.updateProgress.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  componentWillMount() {
    document.addEventListener('mouseup', (e) => {
      if (this.mouseDown) {
        this.mouseDown = false;
      }
    }, false);
  }

  getStyle() {
    this.updateProgress();
    return {
      transform: 'scaleX(' + this.progress + ')',
    };
  }

  updateProgress() {
    const { player } = this.props;
    this.progress = player.currentTime / player.duration;
  }

  onClick(e) {
    let containerSpecs = this.container.getBoundingClientRect(),
      x = e.clientX - containerSpecs.left;

    let progressRate = x / containerSpecs.width;
    
    const { player, track, play, seek } = this.props;

    if (!track.audio) play();
    seek(player.duration * progressRate);
  }

  onMouseMove(e) {
    if (this.mouseDown) {
      this.onClick(e);
    }
  }

  onMouseDown(e) {
    this.mouseDown = true;
    this.props.pause();
  }

  onMouseUp(e) {
    this.mouseDown = false;
    this.props.play();
  }

  render() {
    return (
      <div
        className="seeker-container"
        ref={(input) => { this.container = input; }}
        onClick={this.onClick}
        onMouseMove={this.onMouseMove}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
      >
        <div
          className="seeker-progress-bar"
          style={this.getStyle()}
        >
          <div className="seeker-button"></div>
        </div>
      </div>
    );
  }
}

export default Seeker;