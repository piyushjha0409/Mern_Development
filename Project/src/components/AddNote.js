import React, { useContext, useState } from 'react'
import noteContext from '../Context/notes/NoteContext'
import NoteState from '../Context/notes/NoteState';
import Notes from './Notes';

const AddNote = () => {
  const context = useContext(noteContext);
  const {addNote} = context;

  const [note, setnote] = useState({title:"", description:""});

  const handleClick = (e)=>{
  e.preventDefault();
  addNote(note.title, note.description);
 }
  const onChange =(e)=>{
  setnote({...note, [e.target.name]: e.target.value})
 }

  return (
    <div className='bg-[#e99f4c]'>
      <h1 className='flex justify-center'>Add notes:</h1>
      <div className='m-2'>
        <label className='mx-1 p-2 flex'>Title of the note:</label>
        <input type='text' className='flex mx-2 w-2/5 rounded-md text-black' id='title' name='title' onChange={onChange}/>
        <label className='mx-1 mt-2 p-2 flex'>Description:</label>
        <textarea type='text-area' size='50' className='flex mx-2 w-4/5 h-60 rounded-md text-black' id='description' name='description' onChange={onChange} /><br/>
        <button type="button" className='bg-[#eddcd9] text-black hover:text-white m-2 p-2 rounded-2xl hover:bg-black' onClick={handleClick} >Add Note</button>
      </div>
    </div>
  )
}

export default AddNote