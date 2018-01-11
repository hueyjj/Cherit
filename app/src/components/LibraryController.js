import React, { Component } from 'react';

import "../styles/LibraryController.css";

class LibraryController extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { loadLibrary } = this.props;
    loadLibrary(null);
  }

  render() {
    const { loadLibrary } = this.props;

    return (
      <div className="library-controller">
        <button onClick={this.onClick}>load library</button>
      </div >
    );
  }
}

export default LibraryController;