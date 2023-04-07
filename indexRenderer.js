const { ipcRenderer } = require('electron');

document.getElementById('switch-to-second').addEventListener('click', () => {
  ipcRenderer.send('switch-to-second');
});
