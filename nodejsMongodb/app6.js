//mongodb collection in a single file 
const{MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';
const databaseName='tut';
const client=new MongoClient(url);
async function getdata(){
    let result= await client.connect();
    let db= await result.db(databaseName);
    let collection= db.collection('music');
    let response= await collection.find({age:23}).toArray();
    console.log(response);

}
getdata();