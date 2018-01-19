const path = require("path");
const { IPCMenu } = require(path.join(__dirname, "app", "src", "main-process", "Menu.js"));

const { app, BrowserWindow, Menu, MenuItem } = require("electron");

if (process.env.NODE_ENV == 'dev')
  require('electron-reload')(__dirname)

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ 
    width: 1000, 
    height: 600, 
    frame: false,
    minWidth: 700,
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
