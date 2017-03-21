const express = require('express')
const path = require('path')
const port = 8000
const app = express()
const defDir = '/static/'
var userDir = ''

app.use('/', express.static(path.join(__dirname + defDir)))

app.post('/go', (req, res) => {
    userDir = data
})

app.listen(port)
console.log("Start miniServer on port " + port)
