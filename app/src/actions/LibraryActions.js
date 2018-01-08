import * as utils from "../utils/utils"
import * as types from "../constants/LibraryConstants";

export const fetchLibrary = () => ({
  type: "",
});

export const loadLibraryAction = () => ({
  type: "",
});

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

export const loadLibrary = () => async (dispatch, getState) => {
  const dirs = await utils.getDirectories(); 
  dispatch(setLibraryDirs(dirs));
  const dirsFiles = await utils.getFiles(dirs); 
  dispatch(setLibraryDirsFiles(dirsFiles));
  const trackList = await utils.buildTrackList(dirsFiles);
  dispatch(setLibraryTrackList(trackList));
};