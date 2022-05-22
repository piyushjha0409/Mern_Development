import react, { useState } from 'react';
import noteContext from './NoteContext';


const NoteState = (props)=>{

const host = 'http://localhost:5000'
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
  const addNote = async (title , description)=>{
   //TODO: API CALL
     //API CALL  
    const  response = await fetch(`${host}/api/notes/addnote`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'auth-token' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI2ZTZkZGFjNDdmOGFiYTI4NmYwZTk4In0sImlhdCI6MTY1MTQwNDI1MH0.DXt_GxgF943BSu1vNu1owdEABdZFs0rJchbQbr8_3zw"
    },
    body: JSON.stringify(title, description)
  });

   console.log("Adding the note")
   const note = { //yeh jo naam hai yeh useState waale naam se alag hona chahiye 
    "_id": "6279431c24a0905c2a9533f422",
    "user": "6262d0df35d0738d546a38da",
    "title": title,
    "description": description,
    "date": "2022-05-09T16:36:44.340Z",
    "__v": 0
   };
   setnotes(notes.concat(note));
 }
  //Delete the note
 const delNote = (id)=>{
  console.log("Deleting the note with id " + id)
  const newnote = (notes.filter((note)=>{return note._id!== id}))
  setnotes(newnote)
 }
  //Update the note
  const editNote = async (id, title, description)=>{
    console.log("Editing the note")
    //API CALL  
    const  response = await fetch(`${host}/api/notes/updateNote/${id}`, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         'auth-token' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI2ZTZkZGFjNDdmOGFiYTI4NmYwZTk4In0sImlhdCI6MTY1MTQwNDI1MH0.DXt_GxgF943BSu1vNu1owdEABdZFs0rJchbQbr8_3zw"
       },
       body: JSON.stringify({title, description})
    });
    const json =  response.json();
  //Logic to edit in the client
  for (let index = 0; index < notes.length; index++) {
    const element = notes[index];
    if(element._id == id){
      element.title = title;
      element.description = description;
    }
  }
}
return(
    <noteContext.Provider value={{notes, addNote, delNote, editNote}}>
     {props.children}
    </noteContext.Provider>
)
}

export default NoteState;
