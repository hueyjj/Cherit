import * as utils from "../utils/utils"
import * as types from "../constants/PlayerConstants";

import {
  createTrack,
  setTrackQueue,
  removeTrackAudio,
  setNewTrackAudio,
  shuffleTrackQueue,
} from "../actions/TrackActions";

export const createNewAudio = (src, volume, index) => (dispatch, getState) => {
  let audio = new Audio();
  audio.src = src;
  audio.volume = volume;
  audio.index = index;

  audio.addEventListener("ended", () => {
    dispatch(nextTrack());
  });
  audio.addEventListener("seeked", () => {
    console.log("seeked");
  })
  audio.addEventListener("timeupdate", () => {
    // TODO implement track seeker
  });

  return audio;
};

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

    audio = createNewAudio(src, volume, newIndex)(dispatch, getState);
    dispatch(setNewTrackAudio(audio));

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

export const nextTrack = () => async (dispatch, getState) => {
  dispatch(removeTrackAudio());

  const { track, library } = getState();
  const { queue } = track;
  const { trackList } = library;

  let nextTrackIndex = queue[1];
  console.log(nextTrackIndex);
  if (nextTrackIndex)
    dispatch(createTrack(trackList[nextTrackIndex], nextTrackIndex));
  else
    return;

  if (queue.length > 1) {
    let nextTrackQueue = [...queue].slice(1);
    dispatch(setTrackQueue(nextTrackQueue, null));
    dispatch(play());
  } else {
    dispatch(setTrackQueue([], null));
  }
};