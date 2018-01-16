import React from 'react';
import { connect } from 'react-redux';

import Youtube from '../components/Youtube';
import {
  setYoutubeImage,
  setYoutubeInfo
} from "../actions/YoutubeActions";

const YoutubeContainer = (props) => {
  return (
    <Youtube {...props} />
  );
};

const mapStateToProps = (state) => {
  const { youtube } = state;
  return {
    youtube,
  };
};

const mapDispatchToProps = {
  setYoutubeInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(YoutubeContainer);