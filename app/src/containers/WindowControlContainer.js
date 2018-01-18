import React from 'react';
import { connect } from 'react-redux';

import WindowControl from "../components/WindowControl";

const WindowControlContainer = props => <WindowControl {...props} />;

const mapStateToProps = (state) => {
  const { } = state;

  return {
  }
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(WindowControlContainer);
