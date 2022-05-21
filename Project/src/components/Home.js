import React, {useContext} from 'react'
import Notes from './Notes'
import noteContext from '../Context/notes/NoteContext'
import AddNote from './AddNote';


const Home = () => {
  const context = useContext(noteContext);
  const {notes, setnotes} = context;
  return (
    <div className='m-0 p-0 bg-neutral-900'>     
    <Notes />
    </div>
  )
}
export default Home