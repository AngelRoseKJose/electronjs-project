const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  sendPing: (msg) => ipcRenderer.send('ping', msg),
  onFromMain: (callback) => ipcRenderer.on('fromMain', callback),
  getData: (arg) => ipcRenderer.invoke('get-data', arg)
});
