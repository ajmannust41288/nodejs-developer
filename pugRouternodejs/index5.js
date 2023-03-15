const express=require('express');
const app=express();
app.set('view engine', 'pug');
app.set('views','./views');
app.get('/first',function(req,res){
    res.render('first_view');
});
app.get('*',function(req,res){
    res.render('nopage');
});
app.listen(4000);