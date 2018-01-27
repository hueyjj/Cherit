const path = require("path");
const { ipcMain, Menu, MenuItem, Tray } = require("electron");

const items = [
  {
    label: 'Show youtube-dl',
    accelerator: 'Ctrl+1',
    click: (win) => () => {
      win.webContents.send("youtube-dl");
    }
  },
]

class IPCMenu {
  constructor(win) {
    this.win = win;
    this.menu = new Menu();
    this._initMenu();

    Menu.setApplicationMenu(this.menu);
  }

  _initMenu() {
    items.forEach((item) => {
      item.click = item.click(this.win); // Hack
      this.menu.append(new MenuItem(item));
    })
  }
}

class TrayMenu {
  constructor(win) {
    this.win = win;
    this.__appIcon = this._initMenu();
  }

  _initMenu() {
    let appIcon = new Tray(path.join(__dirname, "..", "assets", "orange.ico"));
    const contextMenu = Menu.buildFromTemplate([
      { label: 'Exit', type: 'normal', click: () => { this.win.close(); } },
    ])
    appIcon.setContextMenu(contextMenu);

    return appIcon;
  }
}

if (typeof module !== "undefined")
  module.exports = {
    IPCMenu,
    TrayMenu,
  };