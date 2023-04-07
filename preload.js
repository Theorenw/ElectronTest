// Add version numbers for Chrome, Node, and Electron to the HTML page.
//
// This preload script will run before the HTML page is loaded.
// It enables the use of Node APIs in the renderer process.
window.addEventListener("DOMContentLoaded", () => {
	const replaceText = (selector, text) => {
		const element = document.getElementById(selector);
		if (element) element.innerText = text;
	};

	for (const dependency of ["chrome", "node", "electron"]) {
		replaceText(`${dependency}-version`, process.versions[dependency]);
	}
});
