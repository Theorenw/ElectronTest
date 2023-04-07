// Main process for the entire app
const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

// Create the app window
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

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.whenReady().then(() => {
	createWindow();

	// On macOS it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	app.on("activate", function () {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
	if (process.platform !== "darwin") app.quit();
});

// ipcMain handles messages sent from a renderer process (web page)
ipcMain.on("switch-to-about", (event) => {
	const focusedWindow = BrowserWindow.getFocusedWindow();
	focusedWindow.loadFile("about.html");
});
ipcMain.on("switch-to-index", (event) => {
	const focusedWindow = BrowserWindow.getFocusedWindow();
	focusedWindow.loadFile("index.html");
});
