import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Todos } from "./components/Todos.js";
import { Footer } from "./components/Footer";
import  {useState, useEffect}  from 'react';
import { addTodo } from "./components/addTodo";

function App(){
  let initTodo;
  if(localStorage.getItem("todos")==null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

const onDelete = (todo)=>{
  console.log("I am onDelete of todo". todo);

  //Deleting the way of todo
  setTodos(todos.filter((e)=>{
    return e!==todo;
  }));
}
console.log("deleted", todos)
localStorage.setItem("todos",JSON.stringify(todos));

const [todos, setTodos] = useState([
  {
    sno: 1,
    title: "Go to the market",
    desc: "Go to the market to buy vegetables"
  },
  {
    sno: 2,
    title: "Go to the mall",
    desc: "Go to the mall to buy Clothes"
  },
  {
    sno: 3,
    title: "Go to the Ghat",
    desc: "Go to the Ghat to have shower"
  },
]);
  return (
 <>
 <Navbar title="MyTodos" searchbar={true}/>
  // <Todos todo={todo} onDelete={onDelete}/>
 <Footer/>
 </>
  );
};
export default App;
