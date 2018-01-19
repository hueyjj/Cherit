import React from 'react';
import { connect } from 'react-redux';

import LibraryController from "../components/LibraryController";
import { hideMenu, showMenu } from "../actions/ConfigActions";
import { loadLibrary } from "../actions/LibraryActions";

const LibraryControllerContainer = (props) => { 
  return (
    <LibraryController {...props} />
  );
};

const mapStateToProps = (state) => { 
  const { library, config } = state;
  return {
    library,
    config,
  } 
};

const mapDispatchToProps = {
    loadLibrary,
    hideMenu,
    showMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(LibraryControllerContainer);