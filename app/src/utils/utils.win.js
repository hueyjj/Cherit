export const minimize = () => {
  const { BrowserWindow } = require("electron").remote;
  BrowserWindow.getFocusedWindow().minimize();
}

export const maximize = () => {
  const { BrowserWindow } = require("electron").remote;
  BrowserWindow.getFocusedWindow().maximize();
}

export const unmaximize = () => {
  const { BrowserWindow } = require("electron").remote;
  BrowserWindow.getFocusedWindow().unmaximize();
}

export const close = () => {
  const { BrowserWindow } = require("electron").remote;
  BrowserWindow.getFocusedWindow().close();
}