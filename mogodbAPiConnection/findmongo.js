//mongodb collection in a single file 
const{MongoClient}=require('mongodb');
const url='mongodb://127.0.0.1:27017';
const databaseName='tut';
const client=new MongoClient(url);
async function getdata(){
    let result= await client.connect();
    let db= await result.db(databaseName);
    let collection= db.collection('music');
    let response= await collection.find({address:"Bannu2 "}).toArray();
    console.log(response);
    //========================
//   db.collection("music").insertMany([{ name: "jalil", address: "Bannu " },
//   { name: "jalil2", address: "Bannu2 " },{ name: "jalil3", address: "Bannu3 " }]);
//     console.log("sucessfully inserted");
    // db.close();
}
getdata();
