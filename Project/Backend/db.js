const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/iNotebook"
// const mongoURI = "mongodb://localhost:27017/readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

//making a fuunction for the mongoose
 connectToMongo =  ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to mongoose!");
    })
}

module.exports =  connectToMongo;