import './style.css'

let DataTodoList = () => {
  return (
    <>
        <div className="todo">
            <div className="task">
            <p>Task 1</p>
            <button>Delete</button>
            </div>
            <div className="task">
            <p>Task 2</p>
            <button>Delete</button>
            </div>
            <div className="task">
            <p>Task 3</p>
            <button>Delete</button>
            </div>
        </div>
    </>
  );
}

export default DataTodoList;