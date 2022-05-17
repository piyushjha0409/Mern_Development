import React, { useContext } from 'react'
import noteContext from '../Context/notes/NoteContext'
import NoteItem from './NoteItem';

const Notes = () => {
const context = useContext(noteContext);
const {notes, setnotes} = context;
  return (
    <div>
        <h2> Your Notes: </h2>
        {notes.map((note)=>{
            return <NoteItem note={note}/>;
        })}
    </div>
  )
}

export default Notes