// Package
const {app, BrowserWindow} = require('electron');

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
    console.log(err)
}

app.on('ready', () => {
    win = new BrowserWindow(browserOptions);
    win.loadURL(`file://${__dirname}/app/index.html`)
});