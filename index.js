const {app, BrowserWindow, ipcMain} = require('electron');

app.on('ready', ()=>{
    console.log("ready");
    const win = new BrowserWindow();
    win.loadURL(`file://${__dirname}/index.html`);

    ipcMain.on("hello", (e,m) =>{
            console.log(m);
        }        
    );
});







