const express=require('express');
const app=express();
const reqfilter=require('./middleware.js');
const route=express.Router();
const reqf=route.use(reqfilter);
//route leve  level middleware uses 
app.get("/home",(req,resp)=>{
    resp.send(`
    <h1>welcome to home page</h1>
    `
   ); 
});

reqf.get("/about",(req,resp)=>{
    resp.send(`
    <h1>welcome to about page</h1>
    `
   );});
   reqf.get("/users",(req,resp)=>{
    resp.send(`
    <h1>welcome to users page</h1>
    `
   );});
   app.get("",(req,resp)=>{
    resp.send(`
    <h1>welcome to welcome  page</h1>
    `
   );});
   app.listen(4000);