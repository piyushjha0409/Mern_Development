import React, { useState } from 'react'

export const AddTodo = ({addTodo}) => {
  const[title, setTitle] = useState("");
  const[desc, setDesc] = useState("");

  // function for submitting  the todo
  const submit = (e)=>{
    e.preventDefault();
    if(!title || !desc){
      alert("Title or description required!!");
    }else{
      addTodo(title, desc)
      setTitle("");
      setDesc("");
    }
  }
    return (
  <div className='container my-3'>
    <h3 className='my-4 text-white'>Add Todo Here!</h3>
  <form onSubmit={submit}>
  <div class="mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control w-25" id="title" aria-describedby="emailHelp" />
  </div>

  <div className="mb-3">
    <label htmlFor="desc" className='form-label'>Todo Description</label>
    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control w-25" id="desc" />
  </div>
  <button type="submit" className="btn btn-sm btn-success text-black">Add Todo</button>
      </form>
  </div>
  )
}
