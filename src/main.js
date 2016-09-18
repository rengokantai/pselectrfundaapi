const electron = require('electron');
const path = require('path');

const {app,clipboard,Menu, Tray}=electron;
const STACK_SIZE=3;

function addToStack(item,stack){
	return [item].concat(stack.length>=STACK_SIZE?stack.slice(0,stack.length-1):stack)
}

function checkClipChange(clipboard,onChange){
	let cache = clipboard.readText();
	let latest
	setInterval(_=>{
		latest = clipboard.readText()
		if(latest!==cache){
			cache=latest
			onChange(cache)
		}
	},1000)
}

app.on('ready',_=>{
	let stack=[];
	const tray = new Tray(path.join('src','trayIcon.png'))
	tray.setContextMenu(Menu.buildFromTemplate([{
		label:'<Empty>',enabled:false
	}]))
	checkClipChange(clipboard,text=>{
		stack = addToStack(text,stack)
		console.log(stack);
	})
})