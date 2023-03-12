// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("tut");
//   dbo.createCollection("customers", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });
//=================================================================
// const express = require("express");
// const mongoose = require("mongoose");
// // const Router = require("./routes")

// const app = express();

// app.use(express.json());
// mongoose.connect('mongodb://localhost:27017/tut',
//   {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
//   }
// );
//===========================================================
// const { MongoClient } = require('mongodb')

// // Create Instance of MongoClient for mongodb
// const client = new MongoClient('mongodb://localhost:27017')

// // Connect to database
// client.connect()
//     .then(() => console.log('Connected Successfully'))
//     .catch(error => console.log('Failed to connect', error))

//================================================
const { MongoClient } = require('mongodb')

// Create Instance of MongoClient for mongodb
const client = new MongoClient('mongodb://localhost:27017')

// Connect to database
client.connect()
    .then(() => {
        console.log('Connected Successfully!')
        
        //Close the database connection
        console.log('Exiting..')
        client.close()
    })
    .catch(error => console.log('Failed to connect!', error))
