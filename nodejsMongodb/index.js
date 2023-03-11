const express=require('express');
const app=express();
app.get("",(req,resp)=>{
    resp.send(`
    <h1>welcome to home page</h1>
    <br/>
    <a href="/about">Go To About page</a>
    <br/> <br/>
    <a href="/help">Go To help page</a>
    <br/><br/>
    <a href="/customer">Go To customer page</a>
    <br/><br/>
    <a href="/contact">Go To contact page</a>
    
    `);

});
app.get("/about",(req,resp)=>{
    resp.send(
        [
            {
                name:"ajman",
                email:"ajman65@gmail.com",
                city:"bannu"
            },
            {
                name:"kalim",
                email:"ajman65@gmail.com",
                city:"bannu"
            },
            {
                name:"kalim",
                email:"ajman65@gmail.com",
                city:"bannu"
            }
        ]
        
    );

});
app.get("/help",(req,resp)=>{
    resp.send(`
    <h1>welcome to help page</h1>
    <br/>s
    <a href="/">Go To home page</a>
    `
   );

});
app.get("/customer",(req,resp)=>{
    resp.send(`
    <h1>welcome to help page</h1>
    <input type="text" name="username" placeholder="enter your name" />
    <input type="password" name="password" placeholder="enter your password" />
    <br/>
    <a href="/">Go To home page</a>
    `);

});
app.get("/contact",(req,resp)=>{
    resp.send(`
    <h1>welcome to contact page</h1>
    <br/>
    <a href="/">Go To home page</a>
    `);

});
app.listen(5000);