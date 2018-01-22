import React from 'react';
import { connect } from 'react-redux';

import WindowControl from "../components/WindowControl";

const WindowControlContainer = props => <WindowControl {...props} />;

const mapStateToProps = (state) => {
  const { app } = state;

  return {
    app,
  }
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(WindowControlContainer);
