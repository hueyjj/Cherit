import * as utils from "../utils/utils"
import * as types from "../constants/TrackConstants";
import { range } from "../utils/utils";

export const createTrack = (track, index) => ({
  type: types.TRACK_SET,
  payload: {
    track,
    index,
  },
});

export const setTrackQueue = (queue, numTracks) => ({
  type: types.TRACK_SET_QUEUE,
  payload: range(queue, numTracks),
});

export const shuffleTrackQueue = () => ({
  type: types.TRACK_SHUFFLE_QUEUE,
});

export const setNewTrackAudio = (audio) => ({
  type: types.TRACK_SET_NEW_AUDIO,
  payload: audio,
});

export const removeTrackAudio = () => ({
  type: types.TRACK_REMOVE_AUDIO,
});

export const setTrack = (track, index) => (dispatch, getState) => {
  dispatch(createTrack(track, index));
};
