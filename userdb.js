var mongoose=require('mongoose')
var Schema=mongoose.Schema
mongoose.connect('mongodb://localhost/login', {useNewUrlParser: true,useUnifiedTopology: true});
var db=mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connect success');
});
var UserSchema=new Schema({
    username: String,
    password: String,
},{collection:'user'})
var Usermodel=mongoose.model("user",UserSchema);
module.exports= Usermodel;