import React, { Component } from 'react';
import Draggable from 'react-draggable';

import "../styles/Seeker.css";

class Seeker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      mouseDown: false,
      mouseLeft: false,
      mouseIsOutside: false
    }

    this.componentWillMount = this.componentWillMount.bind(this);
    this.getStyle = this.getStyle.bind(this);
    this.updateProgress = this.updateProgress.bind(this);
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
        this.setState({mouseDown: false});
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
    this.updateProgress();
    return {
      transform: 'scaleX(' + this.state.progress + ')',
    };
  }

  updateProgress() {
    const { player } = this.props;
    this.state.progress = player.currentTime / player.duration;
  }

  onClick(e) {
    let containerSpecs = this.container.getBoundingClientRect(),
      x = e.clientX - containerSpecs.left;

    let progressRate = x / containerSpecs.width;
    if (progressRate >= 1) return;

    const { player, track, play, seek } = this.props;

    seek(player.duration * progressRate);
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
    this.setState({mouseDown: true});
    this.props.pause();
  }

  onMouseUp(e) {
    this.container.focus();
    this.setState({mouseDOiwn: false});
    this.props.play();
  }

  onMouseEnter(e) {
    this.setState({mouseLeave: false});
  }

  onMouseLeave(e) {
    this.setState({mouseLeave: true});
  }

  render() {
    return (
      <div
        className="seeker-container"
        draggable="false"
        ref={(input) => { this.container = input; }}
        onClick={this.onClick}
        onMouseMove={this.onMouseMove}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <div
          className="seeker-progress-bar"
          draggable="false"
          style={this.getStyle()}
        >
          <div
            className="seeker-button"
            draggable="false"
          >
          </div>
        </div>
      </div>
    );
  }
}

export default Seeker;
