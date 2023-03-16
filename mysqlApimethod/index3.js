const express=require('express');
const con=require('./config');
const app=express();
app.use(express.json());
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
//post api //data inserted through postman 
app.post('/',(req,resp)=>{
    const data=req.body;
    con.query("INsert INTO users SET ?",data,(error,result,fields)=>{
        if(error) error;
        resp.send(result);
    });
});
//put api through postman
app.put('/:id',(req,resp)=>{
    const data = [req.body.fname,req.body.lname,req.body.city,req.params.id];
    con.query("UPDATE users SET fname= ?, lname= ? ,city= ? where  id= ?",data,(error,result,fields)=>{
        if(error) error;
        resp.send(result);
    });
});
//=======put api statically
// app.put('',(req,resp)=>{
//     // const data = ["Nomank","khan","Bannu",6];
//     con.query("UPDATE users SET fname= ?, lname= ? ,city= ? where  id= ?",data,(error,result,fields)=>{
//         if(error) error;
//         resp.send(result);
//     });
// });
//===============delete api
app.delete('/:id',(req,resp)=>{
   con.query("DELETE FROM users WHERE id = "+req.params.id,(error,result)=>{
    if(error) error;
        resp.send(result);
   });
});
app.listen(4000);