const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';
const databaseName='tut';
const client=new MongoClient(url);
async function dbconnect(){
    let result=await client.connect();
    db=result.db(databaseName);
    // return db.collection('product');
    return db.collection('music');
}
module.exports=dbconnect;