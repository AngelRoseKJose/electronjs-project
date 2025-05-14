import { app, BrowserWindow, Menu } from 'electron';
import path from 'path'
import { fileURLToPath } from 'url'
import { ipcMain } from 'electron'

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
    console.log(arg);
  });

  ipcMain.handle('get-data', async (event, arg) => {
    return 'Data: ' + arg;
  });

  Menu.setApplicationMenu(null);
  win.loadURL('http://localhost:5173')



}
