// Functions for switching between pages
const { ipcRenderer } = require("electron");

function switchToAbout() {
	// Send a message to the main process
	ipcRenderer.send("switch-to-about");
}

function switchToIndex() {
	// Send a message to the main process
	ipcRenderer.send("switch-to-index");
}
