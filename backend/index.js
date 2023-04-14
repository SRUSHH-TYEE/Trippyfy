const express = require("express");
const connectToMongo = require("./db")
connectToMongo();
const dotenv = require("dotenv");

const app = express()
const port = 5000
dotenv.config();

// Parse JSON request bodies
app.use(express.json());

//Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/organization', require('./routes/organization'))
app.use('/api/requesteduser', require('./routes/requesteduser'))
app.use('/api/trip', require('./routes/trip'))
app.use('/api/chat', require('./routes/chat'))
app.use('/api/message', require('./routes/message'))

const PORT = process.env.PORT||5000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})