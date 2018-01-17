const path = require("path");
const { IPCMenu } = require(path.join(__dirname, "app", "src", "main-process", "Menu.js"));

const { app, BrowserWindow, Menu, MenuItem } = require("electron");
// const { Menu, MenuItem } = electron;

if (process.env.NODE_ENV == 'dev')
  require('electron-reload')(__dirname)

// const app = electron.app;

// const BrowserWindow = electron.BrowserWindow;

//const path = require('path');
//const url = require('url');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  mainWindow.loadURL(`file://${__dirname}/app/index.html`)
  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function () {
    mainWindow = null
  })

  // Custom menu
  new IPCMenu(mainWindow);
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
});
