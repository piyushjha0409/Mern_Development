const mongoose = require('mongoose')

//creating the blogschema
const NoteSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
     type:String,
     required:true
    },
    date:{
        type:Date,
        default: Date.now
    }
})

//exporting the schema
modules.export = mongoose.model("Notes", NoteSchema)