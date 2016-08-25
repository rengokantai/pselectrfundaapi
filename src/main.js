const electron = require('electron');
const path = require('path');
const app = electron.app;
const Tray = electron.Tray
app.on('ready',_=>{
	new Tray(path.join('src','icon.png'))
})
