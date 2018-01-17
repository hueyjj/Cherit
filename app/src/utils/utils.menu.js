import { ipcRenderer } from "electron";

export const connectMenu = () => {
  ipcRenderer.on("youtube-dl", () => {
    console.log("gotchu");
  });
};