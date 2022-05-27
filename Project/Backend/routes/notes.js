const express = require('express');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser')
const Note = require('../models/Notes')
const { body, validationResult } = require('express-validator');


//Router1: Post all the notes using : GET "/api/ntoes/fetchallnotes" )Log in required!
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id })
        res.json(notes)
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server Error!")
    }
})

//Error occuring from this block of code 

// Route2: Add the notes using: POST "/api/notes/addnotes"
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must contains alteast 5 characters').isLength({ min: 5 })
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;

        //if there are any bad request and error
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save();

        res.send(savedNote)

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 3: Udating the exisiting node from the user : PUT "/api/notes/updateNote/:id". Login required!
router.put('/updateNote/:id', fetchuser, async (req, res) => {

    const { title, description, tag } = req.body

    //creating the newNote object 
    const newNote = {};
    if (title) {
        newNote.title = title
    };
    if (description) {
        newNote.description = description
    };
    if (tag) {
        newNote.tag = tag
    };

    //Now we will update it to the existing note:
     let note = await Note.findById(req.params.id)

    // if the notes did not exist in the database
    if (!note) {
        return res.status(404).send("Not found!")
    }

    if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed!");
    }

    note = await Note.findByIdAndUpdate(req.params.id, {$set: newNote}, {new: true})
    res.json({note});
})

//Route 3: For deleting the note : "/deleteNote/:id": Login required!
router.delete('/deleteNote/:id', fetchuser, async(req, res)=>{
    try {
        //finding the note in the database which is to be deleted.
        let note = await Note.findById(req.params.id)

        //if the note doesnt exist in the database
        if(!note){
            return res.status(404).send("Not Found!");
        }
        // Matching the existing user id 
        if(note.user.toString() !== req.user.id){
            // console.log(note.user.toString())
            return res.status(401).send("Not Allowed!");
        }

        //deleting the note from the database
        note = await Note.findByIdAndDelete(req.params.id)
        res.json({"Success": "Note has been deleted!", note: note})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: "Please authenticate the using a valid token!"})
    }
})

module.exports = router