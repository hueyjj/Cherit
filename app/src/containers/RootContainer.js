import React from 'react';
import { connect } from 'react-redux';

import Root from '../components/Root';

const RootContainer = props => <Root {...props} />;

const mapStateToProps = (state) => {
  const { router } = state;

  return {
  };
};


export default connect(mapStateToProps)(RootContainer);
