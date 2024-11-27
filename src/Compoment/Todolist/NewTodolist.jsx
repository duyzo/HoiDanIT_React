import './style.css'
let AddTodo = (props) => {
  const {TestFunction} = props

  
  return (
    <>
      <input type="text" id='add_new' placeholder="Add a new task" />
      <button onClick={TestFunction} >Add</button>
    </>
  );
};
export default AddTodo;
