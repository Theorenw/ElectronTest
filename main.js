const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

// Step 1 - hello world
function createWindow() {
	const mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: path.join(__dirname, "preload.js"),
			nodeIntegration: true,
			contextIsolation: false,
		},
	});

	mainWindow.loadFile("index.html");
}

// Step 1 - hello world
app.whenReady().then(() => {
	createWindow();

	app.on("activate", function () {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

// Step 1 - hello world
app.on("window-all-closed", function () {
	if (process.platform !== "darwin") app.quit();
});

//
// Step 2 - Switching between windows
//
ipcMain.on("switch-to-about", (event) => {
	const focusedWindow = BrowserWindow.getFocusedWindow();
	focusedWindow.loadFile("about.html");
});
ipcMain.on("switch-to-index", (event) => {
	const focusedWindow = BrowserWindow.getFocusedWindow();
	focusedWindow.loadFile("index.html");
});
