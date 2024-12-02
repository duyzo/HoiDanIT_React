import "./style.css";

let DataTodoList = (props) => {
  const { Todolist,DeleteTodo } = props;

  return (
    <>
      <div className="todo">
        {Todolist.map((item) => {
          return (
            <>
              <div className="task" key={item.id}>
                <p>{item.name}</p>
                <button onClick={()=>DeleteTodo(item.id)}>Delete</button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default DataTodoList;
