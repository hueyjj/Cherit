import * as utils from "../utils/utils"
import * as types from "../constants/PlayerConstants";

import {
  setTrack,
  createTrack,
  setTrackQueue,
  removeTrackAudio,
  setNewTrackAudio,
  shuffleTrackQueue,
  popQueue,
} from "../actions/TrackActions";

export const updatePlayerProgress = (time) => ({
  type: types.PLAYER_UPDATE_PROGRESS,
  payload: time,
})

export const setPlayerDuration = (duration) => ({
  type: types.PLAYER_SET_DURATION,
  payload: duration,
})

export const createNewAudio = (src, volume, index) => (dispatch, getState) => {
  let audio = new Audio();
  audio.src = src;
  audio.volume = volume;
  audio.index = index;

  audio.addEventListener("loadedmetadata", () => {
    dispatch(setPlayerDuration(audio.duration));
  });
  audio.addEventListener("ended", () => {
    dispatch(nextTrack());
  });
  audio.addEventListener("seeked", () => {
    console.log("seeked");
  })
  audio.addEventListener("timeupdate", () => {
    let time = audio.currentTime;
    dispatch(updatePlayerProgress(time));
  });

  return audio;
};

export const play = () => async (dispatch, getState) => {
  const { track, library } = getState();
  const { index } = track;
  const { trackList } = library;

  let { audio } = track;

  if (trackList.length <= 0) return;

  if (audio)
    audio.play();
  else
    dispatch(nextTrack());
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

  let { track, library } = getState();
  const { trackList } = library;

  if (track.queue.length > 0) {
    // Check queue
    let queue = getState().track.queue;
    if (queue.length <= 0) return;

    // Get next track and remove it from queue
    let nextTrackIndex = queue[0];
    dispatch(popQueue());

    // Set track
    dispatch(setTrack(trackList[nextTrackIndex], nextTrackIndex));

    track = getState().track;

    // Create actual audio object and set it in the store
    let newTrack = trackList[track.index],
      src = newTrack.path,
      volume = track.volume,
      newIndex = track.index;
    let audio = createNewAudio(src, volume, newIndex)(dispatch, getState);
    audio.load();

    dispatch(setNewTrackAudio(audio));
    dispatch(play());
  } else {
    dispatch(setTrackQueue([], null));
  }
};

export const seek = (time) => (dispatch, getState) => {
  const { track, player } = getState();
  if (track.audio)
    track.audio.currentTime = time;
};

export const jumpToTrack = (index) => (dispatch, getState) => {
  dispatch(removeTrackAudio());

  const { track } = getState();
  const { queue } = track;

  let newQ = queue.slice(index);
  newQ = newQ.length > 0 ? newQ : [index];
  dispatch(setTrackQueue(newQ));
  dispatch(nextTrack());
};
