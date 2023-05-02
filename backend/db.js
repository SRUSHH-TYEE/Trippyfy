const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const mongoURI = process.env.MONGO_URI
//"mongodb://localhost:27017"

const connectToMongo = () => {

  try {
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
      console.log("connecteed to mongo successfully!!")
    })
  }
  catch(err){
    console.log(err.message)
  }

     
  }


module.exports = connectToMongo



// const uri = "mongodb+srv://Srushh:srushh@cluster0.ebh3lma.mongodb.net/test?retryWrites=true&w=majority";


// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function connectToMongo() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("test").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }

// module.exports = connectToMongo
