const express = require('express')
const app = express()
const port = 3000


//run with $node app.js
app.get('/', (req, res) => {
  res.send('This is the root get request...')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})