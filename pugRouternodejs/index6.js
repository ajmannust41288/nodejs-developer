var express = require('express');
var app = express();
app.set('view engine','pug');
app.set('views','./views');
app.get('/dynamic', function(req, res){
   res.render('dynamic', {
      name: "ajman khan ", 
      url:"https://ajman.art.blog"
   });
});
app.get('*',function(req,res){
    res.render('nopage',{
        auther:"ajman nustian"
    });
});
app.get("/user",function(req,resp){
    res.render('user',{
        user: {name: "Ayush", age: "20"}
     });
});
app.listen(4000);