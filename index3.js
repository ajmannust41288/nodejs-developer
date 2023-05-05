const express=require('express');
const path=require('path');
const app=express();
const publicpath=path.join(__dirname,'public');
app.get('',(req,resp)=>{
    resp.sendFile('${publicpath} /home.html');
});
app.get('/about',(req,resp)=>{
    resp.sendFile('${publicpath} /about.html');
});
app.get('/help',(req,resp)=>{
    resp.sendFile('${publicpath} /help.html');
});
app.get('*',(req,resp)=>{
    resp.sendFile('${publicpath} /nopage.html');
});
app.listen(5000);