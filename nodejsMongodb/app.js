const express=require('express');
const app=express();
app.set('view engine','ejs');
 const user={
        name:"ajman",
        email:"ajman654@gmail.com",
        city:"bannu",
        skills:['PHP','JS','C++']
    };
app.get('/profile',(req,resp)=>{
    resp.render('profile',{user});
});

app.get('/login',(req,resp)=>{
    resp.render('login');
});
app.listen(3000);