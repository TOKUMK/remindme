const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = ('url');

// window object
let win;

function createWindow(){
    win = new BrowserWindow({width: 200, height: 60});

    win.loadURL(url.format({
        pathname: path.join(__dir, 'index.html'),
        protocol: 'file',
        slashes: true
    }));


    win.webContents.openDevTools();

    win.on('closed', ()=> {
        win = null;
    });

    app.on('ready', createWindow);

    app.on('windoow-all-closed', ()=>{
        if(process.platform !== 'darwin'){
            app.quit();
        }
    });





}
