import React from 'react';
import { connect } from 'react-redux';

import Root from '../components/Root';
import { connectMenu } from "../actions/AppActions";

const RootContainer = props => <Root {...props} />;

const mapStateToProps = (state) => {
  const { youtube } = state;

  return {
    youtube,
  }
};

const mapDispatchToProps = {
  connectMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
