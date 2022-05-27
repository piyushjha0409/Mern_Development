import react, { useState } from 'react';
import noteContext from './NoteContext';


const NoteState = (props)=>{

const host = 'http://localhost:5000'
const noteInitial = []
const [notes, setnotes] = useState(noteInitial)

//fetching all the notes
const getNotes = async ()=>{
  //API CALL
   const  response = await fetch(`${host}/api/notes/fetchallnotes`, {
   method: 'GET',
   headers: {
     'Content-Type': 'application/json',
     'auth-token' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI2MmQwZGYzNWQwNzM4ZDU0NmEzOGRhIn0sImlhdCI6MTY1MDY0MzE2N30.P-whyBYvJaNlQr556R4YmR3XVKqgMjQaBI4Q0KPCPLc"
   }
 });
  const json = await response.json()
  console.log(json)
  setnotes(json)
}
  //Add a note
  const addNote = async (title , description, tag)=>{
   //API CALL  
    const  response = await fetch(`${host}/api/notes/addnote`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'auth-token' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI2MmQwZGYzNWQwNzM4ZDU0NmEzOGRhIn0sImlhdCI6MTY1MDY0MzE2N30.P-whyBYvJaNlQr556R4YmR3XVKqgMjQaBI4Q0KPCPLc"
    },
    body: JSON.stringify({title, description, tag})
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
 const delNote = async (id)=>{
    const  response = await fetch(`${host}/api/notes/deleteNote/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'auth-token' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI2MmQwZGYzNWQwNzM4ZDU0NmEzOGRhIn0sImlhdCI6MTY1MDY0MzE2N30.P-whyBYvJaNlQr556R4YmR3XVKqgMjQaBI4Q0KPCPLc"
    },
 });
  console.log("Deleting the note with id " + id)
  const newnote = (notes.filter((note)=>{return note._id!== id}))
  setnotes(newnote)
 }

  //Update the note
  const editNote = async (id, title, description, tag)=>{
    console.log("Editing the note")
    //API CALL  
    const  response = await fetch(`${host}/api/notes/updateNote/${id}`, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         'auth-token' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI2MmQwZGYzNWQwNzM4ZDU0NmEzOGRhIn0sImlhdCI6MTY1MDY0MzE2N30.P-whyBYvJaNlQr556R4YmR3XVKqgMjQaBI4Q0KPCPLc"
       },
       body: JSON.stringify({title, description, tag})
    });
    const json =  response.json();
  //Logic to edit in the client
  for (let index = 0; index < notes.length; index++) {
    const element = notes[index];
    if(element._id === id){
      element.title = title;
      element.description = description;
      element.tag = tag;
    }
  }
}
return(
    <noteContext.Provider value={{notes, addNote, delNote, editNote, getNotes}}>
     {props.children}
    </noteContext.Provider>
)
}
export default NoteState;
