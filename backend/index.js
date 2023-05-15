const express = require("express");
const connectToMongo = require("./db");
var cors = require('cors')
const dotenv = require("dotenv");

dotenv.config();
const app = express()
const port = process.env.PORT||5000;

connectToMongo()
app.use(cors())

// Parse JSON request bodies
app.use(express.json());

//Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/organization', require('./routes/organization')) 
app.use('/api/requesteduser', require('./routes/requesteduser'))
app.use('/api/trip', require('./routes/trip'))
app.use('/api/availStatus', require('./routes/availStatus'))
// app.use('/api/chat', require('./routes/chat'))
// app.use('/api/message', require('./routes/message'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})