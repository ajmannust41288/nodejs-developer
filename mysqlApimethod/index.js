const express=require('express');
const EventEmitter=require('events');
const app=express();
const event=new EventEmitter();
let count=0
event.on("API counted",()=>{
    count++;
    console.log(" Event called ",count);
})
app.get('/',(req,resp)=>{
resp.send("api is called ");
event.emit("API counted");
});
app.get('/search',(req,resp)=>{
    resp.send(" serach api is called ");
    event.emit("API counted");
    });
    app.get('/update',(req,resp)=>{
        resp.send(" update api is called ");
        event.emit("API counted");
        });
app.listen(4000);