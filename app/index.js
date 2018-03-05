// Packages
const {app, BrowserWindow} = require('electron');
const {ipcMain} = require('electron');
const loger = require('electron-timber');

const browserOptions = {
  titleBarStyle: 'hiddenInset',
  backgroundColor: '#000000',
  minWidth: 505,
  minHeight: 232,
  show: false
};

let win = null;

try {
  require('electron-reloader')(module);
} catch (err) {
  throw err;
}

app.on('ready', () => {
  win = new BrowserWindow(browserOptions);
  win.once('ready-to-show', () => {
    win.show();
  });
  ipcMain.on('max-window', (event, args) => {
    if (win.isMaximized()) {
      win.unmaximize();
    } else {
      win.maximize();
    }
  });
  loger.log('Running main process...');
  win.loadURL(`file://${__dirname}/index.html`);
});
