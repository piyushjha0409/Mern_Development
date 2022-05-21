import React, { useContext, useState } from 'react'
import noteContext from '../Context/notes/NoteContext'
import NoteState from '../Context/notes/NoteState';
import Notes from './Notes';

const AddNote = () => {
  const context = useContext(noteContext);
  const {addNote} = context;

  const [notes, setnotes] = useState({title:"", description:""});

  const handleclick = (e)=>{
  e.preventDefault();
  addNote(notes.title, notes.description);
 }
  const onChange =(e)=>{
  setnotes({...notes, [e.target.name]: e.target.value})
 }

  return (
    <div className='bg-[#e99f4c]'>
      <h1 className='flex justify-center'>Add notes:</h1>
      <div className='m-2'>
        <label className='mx-1 p-2 flex'>Title of the note:</label>
        <input type='text' className='flex mx-2 w-2/5 rounded-md text-black' id='title' onChange={onChange}/>
        <label className='mx-1 mt-2 p-2 flex'>Description:</label>
        <textarea type='text-area' size='50' className='flex mx-2 w-4/5 h-60 rounded-md text-black' id='description' onChange={onChange} /><br/>
        <button type="button" className='bg-[#eddcd9] text-black hover:text-white m-2 p-2 rounded-2xl hover:bg-black' handleclick={handleclick} >Add Note</button>
      </div>
    </div>
  )
}

export default AddNote