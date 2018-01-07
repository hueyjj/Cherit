import React from 'react';
import { connect } from 'react-redux';

import LibraryController from "../components/LibraryController";
import { loadLibrary } from "../actions/LibraryActions";

const LibraryControllerContainer = (props) => { 
  return (
    <LibraryController {...props} />
  );
};

const mapStateToProps = (state) => { 
  const { library } = state;
  return {
  } 
};

const mapDispatchToProps = {
    loadLibrary,
    // removeFromLibrary,
};

export default connect(mapStateToProps, mapDispatchToProps)(LibraryControllerContainer);