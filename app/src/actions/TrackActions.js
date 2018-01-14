import * as utils from "../utils/utils"
import * as types from "../constants/TrackConstants";
import { base64ArrayBuffer } from "../utils/utils.github.js";
import { range } from "../utils/utils";

export const createTrack = (track, image, index) => ({
  type: types.TRACK_SET,
  payload: {
    track,
    image,
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
  let image = null;
  if (track && track.picture.length > 0) {
    let pic = track.picture;
    image = "data:image/" + pic[0].format + ";base64,"
      + base64ArrayBuffer(pic[0].data);
  }
  dispatch(createTrack(track, image, index));
};

export const popQueue = () => (dispatch, getState) => {
  const { track, library } = getState();
  const { queue } = track;
  const { trackList } = library;

  if (queue.length > 0) {
    let nextTrackQueue = [...queue].slice(1);
    dispatch(setTrackQueue(nextTrackQueue, null));
  }
};