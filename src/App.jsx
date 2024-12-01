import reactLogo from "./assets/react.svg";
import "./App.css";
import AddTodo from "./Compoment/Todolist/NewTodolist";
import DataTodoList from "./Compoment/Todolist/DataTodoList";
import { useState } from "react";

function App() {
  const [Todolist, setTodoList] = useState([
    // {id:1,name:"watching movie"},
    // {id:2,name: "do homework"}
  ]);
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let DeleteTodo = (key) => {
    setTodoList(Todolist.filter(item=>item.id !== key))
  }

  const AddList = (data) => {
    const handleData = {
      id: randomIntFromInterval(1, 1000),
      name: data,
    };
    setTodoList([...Todolist, handleData]);
  };

  return (
    <>
      <div>
        <h1 className="title">Todo List</h1>
        <AddTodo AddList={AddList} />

      {Todolist.length > 0 ?
        <DataTodoList Todolist={Todolist} DeleteTodo ={DeleteTodo} />
      :
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      }
      </div>
     
    </>
  );
}

export default App;
