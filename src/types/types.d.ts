declare module "*.png" {
  const value: any;
  export default value;
}

declare module "*.jpg" {
  const value: any;
  export default value;
}

declare module "*.ico" {
  const value: any;
  export default value;
}

declare 
interface Window {
    electron: Electron
}

// TODO Find proper declaration for ipcRenderer
interface Electron {
  ipcRenderer: any
  sendMessage: () => Promise<void>,
}

declare module '@electron/remote/main';
