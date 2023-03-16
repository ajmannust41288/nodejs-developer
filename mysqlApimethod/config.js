const mysql=require('mysql');
const con=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'',
        database:'blog'
    }
);
con.connect((err)=>{
    if(err){
        console.warn("connection problems ..erro");
    }
    else{
        console.warn("connected successfully ");
    }
});
module.exports=con;