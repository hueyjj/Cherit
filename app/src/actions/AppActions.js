import { ipcRenderer } from "electron";

import { showYoutube, hideYoutube } from "../actions/YoutubeActions";

export const connectMenu = () => (dispatch, getState) => {
  ipcRenderer.on("youtube-dl", () => {
    console.log(getState());
    if (getState().youtube.shouldShow) { // Reverse checks
      dispatch(hideYoutube());
    } else {
      dispatch(showYoutube());
    }
  });
};