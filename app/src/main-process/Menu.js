const { ipcMain, Menu, MenuItem } = require("electron");

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

if (typeof module !== "undefined")
  module.exports = {
    IPCMenu,
  };