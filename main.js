const path = require("path");
const { IPCMenu } = require(path.join(__dirname, "app", "src", "main-process", "Menu.js"));

const { app, BrowserWindow, Menu, MenuItem, Tray } = require("electron");

if (process.env.NODE_ENV == 'dev')
  require('electron-reload')(__dirname)

let mainWindow;

function createWindow() {

  // TODO move tray stuff to a different file and into the renderer process
  appIcon = new Tray(path.join(__dirname, "app", "src", "assets", "orange.ico") )
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Item1', type: 'normal'},
    {label: 'Exit', type: 'normal'},
  ])
  // Call this again for Linux 
  appIcon.setContextMenu(contextMenu);

  mainWindow = new BrowserWindow({
    title: "Project Blue",
    icon: process.platform == "win32" ? path.join(__dirname, "app", "src", "assets", "orange.ico") : "",
    width: 800,
    height: 500,
    frame: false,
    minWidth: 800,
    minHeight: 500,
  });

  mainWindow.loadURL(`file://${__dirname}/app/index.html`)

  if (process.env.NODE_ENV == "dev")
    mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function () {
    mainWindow = null
  })

  mainWindow.setMenuBarVisibility(false);

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
    createWindow();
  }
});
