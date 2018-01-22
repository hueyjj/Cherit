import { ipcRenderer } from "electron";

import * as types from "../constants/AppConstants";

import { showYoutube, hideYoutube } from "../actions/YoutubeActions";

export const connectMenu = () => (dispatch, getState) => {
  ipcRenderer.on("youtube-dl", () => {
    if (getState().youtube.shouldShow) { // Reverse checks
      dispatch(hideYoutube());
    } else {
      dispatch(showYoutube());
    }
  });
};

export const setWindowTitle = (title) => ({
  type: types.APP_SET_TITLE,
  payload: title,
});