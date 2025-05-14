import { BrowserWindow } from 'electron'
import path from 'path'
import { fileURLToPath } from 'url'
import { ipcMain } from 'electron'
// const { ipcMain } = require('electron');
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    }
  })

    ipcMain.on('ping', (event, arg) => {
        console.log(arg); // "Hello from renderer"
    });

    ipcMain.handle('get-data', async (event, arg) => {
    // You can do async work here
    return 'Data: '+ arg;
    });
  // Dev server
  win.loadURL('http://localhost:5173')

  // For production (after `vite build`)
  // win.loadFile(path.join(__dirname, '../dist/index.html'))


}
