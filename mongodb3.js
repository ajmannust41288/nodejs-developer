// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://127.0.0.1:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("tut");
//   dbo.createCollection("customer", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });
//=========================================
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("tut");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("music").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});