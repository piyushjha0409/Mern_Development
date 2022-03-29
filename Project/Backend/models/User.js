const mongoose = require('mongoose')

//creating a new schema
var Schema = mongoose.Schema
const UserSchema = new Schema({
   name:{
       type:String,
       required:true,
   },
   email:{
       type:String,
       required:true,
       unique:true
   },
   password:{
        type:String,
        required:true,
        unique:true
   },
    date:{
        type:Date,
        default: Date.now,
        unique:true
    }
});

//exporting the model 
module.exports = mongoose.model("User", UserSchema);