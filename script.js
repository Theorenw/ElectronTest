// Step 2 - Switching between windows
const { ipcRenderer } = require("electron");

function switchToAbout() {
	ipcRenderer.send("switch-to-about");
}

function switchToIndex() {
	ipcRenderer.send("switch-to-index");
}
