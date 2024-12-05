import "./style.css";

let DataTodoList = (props) => {
  const { Todolist,DeleteTodo,EditTodo } = props;
  const input = document.querySelector('input')
  return (
    <>
      <div className="todo">
        {Todolist.map((item) => {
          return (
            <>
              <div className="task" key={item.id}>
                <p>{item.name}</p>
                <div>
                <button 
                onClick={()=>{
                  input.value = item.name
                  document.querySelector(".add").onclick = () => EditTodo(item.id,input.value)
                }}
                >Edit</button>
                <button onClick={()=>DeleteTodo(item.id)}>Delete</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default DataTodoList;
