import reactLogo from "./assets/react.svg";
import "./App.css";
import AddTodo from "./Compoment/Todolist/NewTodolist";
import DataTodoList from "./Compoment/Todolist/DataTodoList";
import { useState } from "react";
import Header from "./layout/header";
import Footer from "./layout/footer";
import { Outlet } from "react-router-dom";

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
    setTodoList(Todolist.filter((item) => item.id !== key));
  };

  let EditTodo = (key, value) => {
    console.log("hi", value);
    let newtodo = Todolist.map((item) => {
      if (item.id === key) item.name = value;
      return item;
    });
    console.log(newtodo);
    setTodoList(newtodo);
  };

  const AddList = (data) => {
    const handleData = {
      id: randomIntFromInterval(1, 1000),
      name: data,
    };
    setTodoList([...Todolist, handleData]);
  };

  return (
    <>
      <Header />
      <div>
        <h1 className="title">Todo List</h1>
        <AddTodo AddList={AddList} />

        {Todolist.length > 0 ? (
          <DataTodoList
            Todolist={Todolist}
            DeleteTodo={DeleteTodo}
            EditTodo={EditTodo}
          />
        ) : (
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        )}
      </div>
      <Outlet/>
      <Footer />
    </>
  );
}

export default App;
