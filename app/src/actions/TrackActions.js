import * as utils from "../utils/utils"
import * as types from "../constants/TrackConstants";

export const setTrack = (track, index) => ({
  type: types.TRACK_SET,
  payload: {
    track,
    index,
  },
});

export const setNewTrackAudio = (src, volume, index) => ({
  type: types.TRACK_SET_NEW_AUDIO,
  payload: {
    src: src,
    volume: volume,
    index: index,
  }
});

export const removeTrackAudio = () => ({
  type: types.TRACK_REMOVE_AUDIO,
});

export const onTrackClick = (track, index) => (dispatch, getState) => {
  dispatch(setTrack(track, index));
};
