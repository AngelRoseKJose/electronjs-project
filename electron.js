import { app, BrowserWindow } from 'electron'
import path from 'path'
import { fileURLToPath } from 'url'

// Required because __dirname and __filename are not available in ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      contextIsolation: true
    }
  })

  // Development: Load Vite dev server
  win.loadURL('http://localhost:5173')

  // Production: Load built SvelteKit app (optional later)
  // win.loadFile(path.join(__dirname, 'build/index.html'))
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
