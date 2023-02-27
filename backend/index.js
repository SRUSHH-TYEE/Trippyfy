const express = require("express");
const connectToMongo = require("./db")
connectToMongo();

const app = express()
const port = 3000
//Available Routes

app.get('/', (req, res) => {
  res.send('Hello Pug!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})