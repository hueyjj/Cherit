import * as utils from "../utils/utils"
import * as types from "../constants/PlayerConstants";

import { setTrackAudio, unsetTrackAudio } from "../actions/TrackActions";

export const play = () => async (dispatch, getState) => {
  const { track, library } = getState();
  const { trackIndex } = track;
  const { trackList } = library;

  let audio = track.audio;
  if (!audio) {
    audio = new Audio(); // New track
    audio.src = trackList[trackIndex].path;
    audio.volume = track.volume;
    audio.index = trackIndex;
    audio.load();
    dispatch(setTrackAudio(audio));
    audio.play();
  }
  else {
    if (trackIndex != audio.index) { // Switch tracks
      audio.src = trackList[trackIndex].path
      audio.index = trackIndex;
    }
    audio.load(); // Continue/Start old/new track
    audio.play();
  }

  console.log("Current audio element");
  console.log(audio);
};

export const pause = () => async (dispatch, getState) => {
  const { track } = getState();
  track.audio.pause();
}

export const stop = () => async (dispatch, getState) => {
  dispatch(unsetTrackAudio());
};

