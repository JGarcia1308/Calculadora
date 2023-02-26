const {app, BrowserWindow} = require("electron");

function createWindow() {
    //Aqui se inicializa la ventana de la aplicacion
   const window = new BrowserWindow({
        width:300,
        height:300,
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false
        }
    });
    //Se carga el archivo html que mostrara la aplicacion
    window.loadFile("index.html");
}
//Cuando la aplicacion este lista crea la ventana con la que se va a trabajar
app.whenReady().then(createWindow);