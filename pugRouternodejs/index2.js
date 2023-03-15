const express=require('express');
const app=express();
const things=require('./things');
app.use('/things',things);
app.listen(4000);