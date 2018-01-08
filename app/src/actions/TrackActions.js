import * as utils from "../utils/utils"
import * as types from "../constants/TrackConstants";

export const onTrackClick = (track) => (dispatch, getState) => {
  console.log(track.title);
};