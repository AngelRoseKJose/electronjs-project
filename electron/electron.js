import { app } from 'electron'
import { createWindow } from './main.js'

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
