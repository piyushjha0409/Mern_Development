import React from 'react';

export const TodoItem = ({todo, onDelete})=>{
 return(
    <>
   <div className='py-3 my-2 bg-slate-600/50 hover:bg-slate-200 rounded-md w-50 mx-auto'>
   <h4 className='mx-6'>{todo.title}</h4>
   <p className='inline mx-6'>{todo.desc}</p>
   <button className="btn btn-sm btn-danger my-1.7 mx-1 float-right" onClick={()=>{onDelete(todo)}}>Delete</button>
   </div>
    </> 

 )
}
