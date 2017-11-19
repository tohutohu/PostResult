const {app, BrowserWindow} = require( 'electron')

let mainWindow = null
app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 400, height: 300})

  mainWindow.loadURL('file://' + __dirname + '/index.html')


  mainWindow.on('closed', () => {
    app.exit()
  })
})
