const mysql=require('mysql');
const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"blog"
});
con.connect((err)=>{
    if(err){
        console.warn("error");
    }
    else{
        console.warn("connected successfully");
    }
});
con.query("select * from users",(err,result)=>{
    console.log("result",result);
})