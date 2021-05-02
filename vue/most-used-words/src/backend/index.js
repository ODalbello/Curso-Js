const { ipcMain } = require('electron')

ipcMain.on('process-subtitles', (event, paths) => {
    console.log(paths)

    event.replay('process-subtitles', [
        { name: 'i', amount: 1234},
        { name: 'you', amount: 900},
        { name: 'he', amount: 853},
        { name: 'she', amount: 544},
        { name: 'our', amount: 930},
        { name: 'house', amount: 43},
    ])
})