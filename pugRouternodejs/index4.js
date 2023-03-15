// var express = require('express');
// var app = express();

// //Middleware function to log request protocol
// app.use('/things', function(req, res, next){
//    console.log("A request for things received at " + Date.now());
//    next();
// });

// // Route handler that sends the response
// app.get('/things', function(req, res){
//    res.send('Things');
// });
//===========================order of middleware
var express = require('express');
var app = express();

//First middleware before response is sent
app.use(function(req, res, next){
   console.log("Start");
   next();
});

//Route handler
app.get('/', function(req, res, next){
   res.send("Middle");
   next();
});

app.use('/', function(req, res){
   console.log('End');
});
app.listen(4000);