import React, { useContext, useState } from 'react'
import noteContext from '../Context/notes/NoteContext'
import NoteState from '../Context/notes/NoteState';

const AddNote = () => {
  const context = useContext(noteContext);
  const {AddNote} = context;

  const [note, setnotes] = useState({title:"", description:""});

  const handleClick = (e)=>{
  e.preventDefault();
  addNote(note.title, note.description);

 }
 const onChange = (...notes, )=>{
  
 }

  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500'>
      <h1 className='flex justify-center'>Add notes:</h1>
      <div className='m-2'>
        <label className='mx-1 p-2 flex'>Title of the note:</label>
        <input type='text' className='flex mx-2 w-2/5 rounded-md text-black'/>
        <label className='mx-1 p-2 flex'>Description:</label>
        <textarea type='text-area' size='50' className='flex m-2 w-4/5 h-60 rounded-md text-black' /><br/>
      </div>
    </div>
  )
}

export default AddNote