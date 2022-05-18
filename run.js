const express = require('express')
const { resolve } = require('path')

const app = express()

const port = 80

const indexFile = resolve(__dirname, 'index.html')

app.use(express.static(resolve(__dirname)))

app.get('/', (req, res) => {
  res.sendFile(indexFile)
})

app.listen(port, () => {
  console.log(`Server started in port ${port}`)
})
