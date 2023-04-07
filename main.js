const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

ipcMain.on('switch-to-second', (event) => {
  const focusedWindow = BrowserWindow.getFocusedWindow();
  focusedWindow.loadFile('second.html');
});

ipcMain.on('switch-to-index', (event) => {
  const focusedWindow = BrowserWindow.getFocusedWindow();
  focusedWindow.loadFile('index.html');
});
