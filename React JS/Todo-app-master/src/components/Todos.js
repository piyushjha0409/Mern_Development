import React from 'react';
import {TodoItem} from './TodoItem';


export const Todos = (props) => {
    return (

        <div className='container'>
            <h3 className="text-center my-3 text-amber-200 font-bold">My Todos</h3>
            {props.todos.length===0? "No Todos to display": 
            props.todos.map((todo)=>{
             console.log(todo.sno);
             return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
             )
            })}
        
        </div>

    )
}
