const { ipcRenderer } = require('electron');

document.getElementById('switch-to-index').addEventListener('click', () => {
  ipcRenderer.send('switch-to-index');
});
