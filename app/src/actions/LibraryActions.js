import * as utils from "../utils/utils"
import * as types from "../constants/LibraryConstants";
import {
  setTrackQueue,
  copyTrackQueue,
} from "../actions/TrackActions";

export const setLibraryDirs = (dirs) => ({
  type: types.LIBRARY_SET_DIRS,
  payload: dirs,
});

export const setLibraryDirsFiles = (dirsFiles) => ({
  type: types.LIBRARY_SET_DIRS_FILES,
  payload: dirsFiles,
});

export const addTrackToLibrary = (track) => ({
  type: types.LIBRARY_ADD_TRACK,
  payload: track,
});

export const changeToTrackList = (trackList) => ({
  type: types.LIBRARY_CHANGE_TRACKLIST,
  payload: trackList,
})

export const setLibraryTrackList = (trackList) => ({
  type: types.LIBRARY_SET_TRACKLIST,
  payload: trackList,
})

export const loadLibrary = (dir) => async (dispatch, getState) => {
  const dirs = await utils.getDirectories(dir);

  if (!dirs) return;

  dispatch(setLibraryDirs(dirs));
  const dirsFiles = await utils.getFiles(dirs);
  dispatch(setLibraryDirsFiles(dirsFiles));
  const trackList = await utils.buildTrackList(dirsFiles);
  dispatch(setLibraryTrackList(trackList));

  let numTracks = getState().library.trackList.length;
  dispatch(setTrackQueue(null, numTracks));

  dispatch(copyTrackQueue());
};