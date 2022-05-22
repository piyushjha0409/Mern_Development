import React, { useContext } from 'react'
import noteContext from '../Context/notes/NoteContext'
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {
const context = useContext(noteContext);
const {notes} = context;
  return (
    <div>
        <AddNote />
        <h2 className='text-white mx-1 mt-4'> Your Notes: </h2>
        {notes.map((note)=>{
            return <NoteItem key={note._id} note={note}/>;
        })}
    </div>
  )
}

export default Notes