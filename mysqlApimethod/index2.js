const express=require('express');
const con=require('./config');
const app=express();
app.get('/',(req,resp)=>{
    con.query("select * from users",(err,result)=>{
        if(err){
            resp.send("Error occured");
        }
        else{
            resp.send(result);
        }
    });
});
//post api 
app.post('/',(req,resp)=>{
    const data={
        "fname":"noman",
        "lname":"haris",
        "city":"peshawar"
    };
    con.query("INsert INTO users SET ?",data,(error,result,fields)=>{
        if(error) error;
        resp.send(result);
    });
});
app.listen(4000);