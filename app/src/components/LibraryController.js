import React, { Component } from 'react';

import "../styles/LibraryController.css";

class LibraryController extends Component {
  constructor() {
    super();
  }

  render() {
    const { loadLibrary } = this.props;

    return (
      <div className="library-controller">
        <button onClick={loadLibrary}>load library</button>
        {/* <button onClick={removeFromLibrary}>remove</button> */}
        <ul>
        </ul>
      </div >
    );
  }
}

export default LibraryController;