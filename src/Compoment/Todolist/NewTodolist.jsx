import './style.css'
let AddTodo = () => {
  return (
    <>
    <h1 className="title">Todo List</h1>
      <input type="text" placeholder="Add a new task" />
      <button>Add</button>
    </>
  );
};
export default AddTodo;
