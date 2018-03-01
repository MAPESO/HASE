// Packages
const {app, BrowserWindow} = require('electron');
const logger = require('electron-timber');

const browserOptions = {
  titleBarStyle: 'hiddenInset',
  backgroundColor: '#000000',
  minWidth: 505,
  minHeight: 232
};

let win = null;

try {
  require('electron-reloader')(module);
} catch (err) {
  /*eslint-disable*/
  console.log(err);
}

app.on('ready', () => {
  win = new BrowserWindow(browserOptions);
  logger.log('Running main processes');
  win.loadURL(`file://${__dirname}/index.html`);
});
