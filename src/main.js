const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow
const menu = electron.menubar
app.on('ready',_=>{
	new BrowserWindow()
	const template = [{
		label:electron.app.getName()
	}]
	Menu.buildFromTemplate(template)
})