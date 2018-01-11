import * as utils from "../utils/utils"
import * as types from "../constants/PlayerConstants";

import {
  removeTrackAudio,
  setNewTrackAudio,
  shuffleTrackQueue,
} from "../actions/TrackActions";

export const play = () => async (dispatch, getState) => {
  const { track, library } = getState();
  const { index } = track;
  const { trackList } = library;

  if (trackList.length <= 0) return;

  let audio = track.audio;
  if (!audio || index != audio.index) { // New track or switch track
    dispatch(removeTrackAudio());

    let src = trackList[index].path,
      volume = track.volume,
      newIndex = index;

    dispatch(setNewTrackAudio(src, volume, newIndex));

    audio = getState().track.audio;
    if (audio) {
      audio.load();
      audio.play();
    }
  }
  else {
    audio.play();
  }
};

export const pause = () => async (dispatch, getState) => {
  const { track } = getState();
  if (track.audio)
    track.audio.pause();
}

export const stop = () => async (dispatch, getState) => {
  dispatch(removeTrackAudio());
};

export const loop = () => async (dispatch, getState) => {

};

export const shuffle = () => async (dispatch, getState) => {
  dispatch(shuffleTrackQueue());
};
