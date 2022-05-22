import React, { useContext } from 'react'
import Notes from './Notes';
import AddNote from './AddNote';
import noteContext from '../Context/notes/NoteContext';

const NoteItem = (props) => {
    const context = useContext(noteContext);
    const {delNote} = context;
    const {note} = props;
  return (
    <a href="#" className="block m-2 `p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{note.title}</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">{note.description}</p>
    <i className="far fa-trash-alt mx-2 text-white cursor-pointer" onClick={()=>delNote(note._id)}></i>
    <i className='far fa-edit text-white cursor-pointer'></i>
</a>
  )
}

export default NoteItem