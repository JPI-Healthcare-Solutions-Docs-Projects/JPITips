import { app, BrowserWindow, ipcMain } from 'electron';

//Declaring typechecked constants
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

//TODO: Add Icon for Desktop App

// Create the browser window.
const createWindow = (): void => {
  const mainWindow = new BrowserWindow({
    // Size of the window
    height: 500,
    width: 1000,

    // Hides the Window Bar
    frame: false,
    thickFrame: false,

    // Hides from taskbar
    skipTaskbar: true,

    // Prevents user from resizing windows
    resizable: false,

    // Preloading Webpack for electron
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  // Keeping the application always on top of any application even fullscreen apps.
  mainWindow.setAlwaysOnTop(true, "screen-saver");
  mainWindow.setVisibleOnAllWorkspaces(true) ;
  mainWindow.setFullScreenable(false);


  setTimeout(function(){
  mainWindow.moveTop();
}, 200);

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // mainWindow.webContents
  // .executeJavaScript('localStorage.getItem("thekey");', true)
  // .then(result => {
  //   console.log(result);
  // });

  // Optional: Uncomment Below to activate Console Dev Tools
  // mainWindow.webContents.openDevTools();

  // InterProcessCommunication: Mapping Close Button to send a response to close the Window
  ipcMain.on('close-window', () => mainWindow.close())
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed. There, it's common
// for applications and their menu bar to stay active until the user quits
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
