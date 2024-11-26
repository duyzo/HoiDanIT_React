
import reactLogo from "./assets/react.svg";
import "./App.css";
import AddTodo from "./Compoment/Todolist/NewTodolist";
import DataTodoList from "./Compoment/Todolist/DataTodoList";


function App() {
  return (
    <>
      <div>
        
       <AddTodo/>
      < DataTodoList/>
      </div>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </>
  );
}

export default App;
