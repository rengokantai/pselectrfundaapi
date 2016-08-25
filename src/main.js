const electron = require('electron');
const path = require('path');
const app = electron.app;
const Tray = electron.Tray
const Menu = electron.Menu
app.on('ready',_=>{
	const tray = new Tray(path.join('src','icon.png'))
	const contextMenu = Menu.buildFromTemplate([{
		label:'a',
		click: _=>console.log('test')
	}])
	tray.setContextMenu(contextMenu)
})
