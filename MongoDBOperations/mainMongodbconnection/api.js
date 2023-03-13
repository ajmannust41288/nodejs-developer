const express=require('express');
const dbConnect=require('./mongodb');
const app=express();
//to onvert into json 
app.use(express.json());
//let make get api or route 
app.get('/',async (req,resp)=>{
    let data=await dbConnect();
    data=await data.find().toArray();
    console.log(data);
resp.send(data);
});
// for post method 
app.post('/',async (req,resp)=>{
    // let data=await dbConnect();
    // data=await data.find().toArray();
    // console.log(data);
    // console.log(req.body);
    let data=await dbConnect();
    let result=await data.insertOne(req.body);
resp.send(result);
});
//use for put method api
app.put('/:name', async (req,resp)=>{
    // console.log(req.body);
    let data=await dbConnect();
    // let result=await data.updateOne({
    //     name:"VIVO26"
    // },{$set:{brand:"OPP34"}});
    // resp.send({result:"updated"});
    //====================================
    let result=await data.updateOne({
    //     name:"VIVO26"
    // },{$set:req.body});
    // resp.send({result:"updated"});
    //========================
    name:req.params.name},{$set:req.body});
    resp.send({result:"updated"});
})
app.listen(5000);