require('dotenv').config()
const express = require('express')
const path = require('path')
const process = require('process')
const app = express()

const port = process.env.PORT || 1234

app.use(express.static(path.resolve(__dirname, './dist')))

app.get('*', (req, res) =>
   res.sendFile(path.resolve(__dirname, './dist', 'index.html'))
)

app.listen(port, () => {
   console.log(`Server running at: http://localhost:${port}`)
})
