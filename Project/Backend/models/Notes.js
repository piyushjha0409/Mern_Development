const mongoose = require('mongoose');
const User = require('./User');

//creating a new schema
var Schema = mongoose.Schema
const NotesSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

const Notes = mongoose.model('Notes', NotesSchema);
// User.createIndexes();
//exporting the model 
module.exports = Notes;