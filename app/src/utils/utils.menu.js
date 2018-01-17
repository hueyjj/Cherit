import { ipcRenderer } from "electron";

import { showYoutube, hideYoutube } from "../actions/YoutubeActions";

export const connectMenu = () => {
  ipcRenderer.on("youtube-dl", () => {
    console.log();
      showYoutube();
      hideYoutube();
  });
};