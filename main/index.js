// Packages
const { app, BrowserWindow, ipcMain } = require('electron');
const { setWindowURL } = require('neutron');

app.on('ready', async () => {
  const haseConfig = new BrowserWindow({
    titleBarStyle: 'hiddenInset',
    backgroundColor: '#000000',
    minWidth: 505,
    minHeight: 232,
    show: false
  });

  haseConfig.once('ready-to-show', () => {
    haseConfig.show();
  });

  ipcMain.on('maximize-unmaximize', () => {
    if (haseConfig.isMaximized()) {
      haseConfig.unmaximize();
    } else {
      haseConfig.maximize();
    }
  });

  setWindowURL(haseConfig, 'intro');
});

app.on('window-all-closed', app.quit);
