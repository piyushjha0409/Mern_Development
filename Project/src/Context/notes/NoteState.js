import react, { useState } from 'react';
import noteContext from './NoteContext';


const NoteState = (props)=>{
const noteInitial = [
    {
      "_id": "6279430e24a0905c2a9533f2",
      "user": "6262d0df35d0738d546a38da",
      "title": "Archit Jain",
      "description": "Archit Marathi hai",
      "date": "2022-05-09T16:36:30.828Z",
      "__v": 0
    },
    {
      "_id": "6279431c24a0905c2a9533f4",
      "user": "6262d0df35d0738d546a38da",
      "title": "Ayush Jha",
      "description": "Mai Bhopali hun",
      "date": "2022-05-09T16:36:44.340Z",
      "__v": 0
    }
  ]

  const [notes, setnotes] = useState(noteInitial)

return(
    <noteContext.Provider value={{notes, setnotes}}>
     {props.children}
    </noteContext.Provider>
)
}

export default NoteState;
