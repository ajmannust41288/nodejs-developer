const express=require('express');
const app=express();
const reqfilter=(req,resp,next)=>{
    if(!req.query.age){
        resp.send("please provide a valid age ");
    }
    else if(req.query.age<18){
        resp.send("you cannot access thsi page ");
    }
    else{
        next();
    }
};
//application level middleware uses 
app.use(reqfilter);
app.get("/home",(req,resp)=>{
    resp.send(`
    <h1>welcome to home page</h1>
    `
   ); 
});

app.get("/about",(req,resp)=>{
    resp.send(`
    <h1>welcome to about page</h1>
    `
   );});
   app.get("/users",(req,resp)=>{
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