const express = require("express");
const connectToMongo = require("./db")
connectToMongo();

const app = express()
const port = 3000

// Parse JSON request bodies
app.use(express.json());

//Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/organization', require('./routes/organization'))
app.use('/api/requesteduser', require('./routes/requesteduser'))
app.use('/api/trip', require('./routes/trip'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})