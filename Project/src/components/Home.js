import React, {useContext} from 'react'
import Notes from './Notes'
import noteContext from '../Context/notes/NoteContext'


const Home = () => {
  const context = useContext(noteContext);
  const {notes, setnotes} = context;
  return (
    <div className='bg-neutral-900'>
    <h1 className='flex justify-center text-white'>Add a note</h1>
     
    <Notes />
    </div>
  )
}
export default Home