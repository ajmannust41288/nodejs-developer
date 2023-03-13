//mongodb connection main file here
//here we insert data 
const dbconnect=require('./mongodb');
// const main=async ()=>{
//     let data=await dbconnect();
//     data=await data.find().toArray();
//     console.warn(data);
// }
// main();
const insert=async ()=>{
    const db=await dbconnect();
    // const result=await db.insertOne({
    //     name:'VIVO23',brand:'OPPO',price:47800,category:'Mobile'
    // });
    //for many insertion of documents 
    const result=await db.insertMany([{
        name:'VIVO24',brand:'OPPO',price:49800,category:'Mobile'
    },{name:'VIVO25',brand:'OPPO',price:51800,category:'Mobile'},
{name:'VIVO26',brand:'OPPO',price:53800,category:'Mobile'}]);
 if(result.acknowledged){
    console.log("Data inserted successfully");
 }
 else{
    console.log("Data not inserted ");
 }
}
insert();