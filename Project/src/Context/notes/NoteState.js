import react, { useState } from 'react';
import noteContext from './NoteContext';


const NoteState = (props)=>{
const noteInitial = [
    {
      "_id": "6279430e24a0905c2a9533f21",
      "user": "6262d0df35d0738d546a38da",
      "title": "Archit Jain",
      "description": "Archit Marathi hai",
      "date": "2022-05-09T16:36:30.828Z",
      "__v": 0
    },
    {
      "_id": "6279431c24a0905c2a9533f42",
      "user": "6262d0df35d0738d546a38da",
      "title": "Ayush Jha",
      "description": "Mai Bhopali hun",
      "date": "2022-05-09T16:36:44.340Z",
      "__v": 0
    }
  ]

  const [notes, setnotes] = useState(noteInitial)

  //Add a note
 const addNote = (title , description)=>{
   //TODO: API CALL
   const note = {
    "_id": "6279431c24a0905c2a9533f42",
    "user": "6262d0df35d0738d546a38da",
    "title": "My Title added",
    "description": "Mai Bhopali hun",
    "date": "2022-05-09T16:36:44.340Z",
    "__v": 0
   };
   setnotes(notes.push(note));
 }
  //Delete the note
 const delNote = (title , description)=>{
   console.window("Deleting the note")
   const note = {
    "_id": "6279431c24a0905c2a9533f42",
    "user": "6262d0df35d0738d546a38da",
    "title": "Ayush Jha",
    "description": "Mai Bhopali hun",
    "date": "2022-05-09T16:36:44.340Z",
    "__v": 0
   }
 }
  //Update the note
  const editNote = (title, description)=>{
    console.window("Editing the note")
  }
return(
    <noteContext.Provider value={{notes, setnotes}}>
     {props.children}
    </noteContext.Provider>
)
}

export default NoteState;
