const { app, BrowserWindow } = require('electron');


let appWindow;

function crearVentana() {
    // algunas propiedades que se pueden configurar en la ventana
    appWindow = new BrowserWindow({
        width: 1400,
        height: 800,
        resizable: false,
        minWidth: 800,
        minHeight: 600,
        center: true,
        show: false, // hasta que este lista carga
        icon: 'icon.png'
    });

    // cuando la aplicación en cerrada
    appWindow.on('closed', () => {
        appWindow = null;
    });

    // cargar HTML
    appWindow.loadFile('./index.html');

    // cuando la app este lista, mostrar la ventana
    appWindow.once('ready-to-show', () => {
        appWindow.show();
    });
}

app.on('ready', crearVentana);