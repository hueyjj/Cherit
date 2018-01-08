import * as utils from "../utils/utils"
import * as types from "../constants/TrackConstants";

export const setTrack = (trackIndex) => ({
  type: types.TRACK_SET,
  payload: trackIndex,
});

export const onTrackClick = (trackIndex) => (dispatch, getState) => {
  dispatch(setTrack(trackIndex));
};