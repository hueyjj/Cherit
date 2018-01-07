import React from 'react';
import { connect } from 'react-redux';

import Root from '../components/Root';
import { incCounter } from '../actions/CounterActions';

const RootContainer = props => <Root {...props} />;

const mapStateToProps = (state) => {
  const { counter } = state;
  return {
    counter,
  };
};

const mapDispatchToProps = {
  incCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
