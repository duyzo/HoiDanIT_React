
import reactLogo from "./assets/react.svg";
import "./App.css";
import AddTodo from "./Compoment/Todolist/NewTodolist";
import DataTodoList from "./Compoment/Todolist/DataTodoList";
import { useState } from "react";

let dataTodo = ["read book", "cooking","sleep"]
function App() {
  const [Todolist,setTodoList] = useState([
    {id:1,name:"watching movie"},
    {id:2,name: "do homework"}
  ])
  return (
    <>
      <div>
      <h1 className="title">Todo List</h1>
       <AddTodo
       />
      < DataTodoList
      dataTodo={Todolist}
      />
      </div>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </>
  );
}


export default App;
