const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001

require("./DataBase/DB")

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello Buddy')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})