import * as utils from "../utils/utils"
import * as types from "../constants/TrackConstants";

export const setTrack = (trackIndex) => ({
  type: types.TRACK_SET,
  payload: trackIndex,
});

export const setTrackAudio = (audio) => ({
  type: types.TRACK_SET_AUDIO,
  payload: audio,
})

export const setTrackNull = () => ({
  type: types.TRACK_SET_NULL,
});

export const unsetTrackAudio = () => (dispatch, getState) => {
  const { track } = getState();
  if (track.audio) {
    track.audio.src = "";
    track.audio.load();
  }
  dispatch(setTrackNull());
};

export const onTrackClick = (trackIndex) => (dispatch, getState) => {
  dispatch(setTrack(trackIndex));
};
