import React, { Component } from 'react';

import "../styles/Youtube.css";

class Volume extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {

  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.input.value);
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
      </div>
    );
  }
}

export default Volume;