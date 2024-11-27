
import reactLogo from "./assets/react.svg";
import "./App.css";
import AddTodo from "./Compoment/Todolist/NewTodolist";
import DataTodoList from "./Compoment/Todolist/DataTodoList";

let dataTodo = ["read book", "cooking","sleep"]
function App() {
  return (
    <>
      <div>
      <h1 className="title">Todo List</h1>
       <AddTodo/>
      < DataTodoList
      dataTodo={dataTodo}
      />
      </div>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </>
  );
}

export default App;
