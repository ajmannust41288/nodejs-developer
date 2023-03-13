module.exports=reqfilter=(req,resp,next)=>{
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
