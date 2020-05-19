var express =require('express');
var app=express();
var path =require('path');
var router=require('./User');
app.use('/',router)
app.listen(3000,function(){
    console.log('ok 3000');
})