var express=require('express');
var user=express.Router();
var Usermodel=require('./userdb');
var path=require('path');
var bodyParser=require('body-parser');
user.use(bodyParser.urlencoded({extended:false}))
user.use(bodyParser.json())
user.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,'login.html'));
})
user.get("/signup",(req,res)=>{
    res.sendFile(path.join(__dirname,'signup.html'));
})
user.post("/login",(req,res,next)=>{
Usermodel.findOne(req.body).then((data)=>{
    if(data){
        res.send('login thanh cong');
    }
    else{
        res.status(500).json("that bai");
    }
})
})
user.post('/signup',(req,res,next)=>{
 Usermodel.findOne(req.body).then((data)=>{
     if(data){
         res.send('tai lhoan da ton tai')
     }
     else{
         next();
     }
 })
},(req,res,next)=>{
    Usermodel.create(req.body).then(()=>{
        res.redirect('/login');
    });
})
module.exports=user;