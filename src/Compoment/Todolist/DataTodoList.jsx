import './style.css'

let DataTodoList = (props) => {
  console.log(props.dataTodo);
  
  return (
    <>
        <div className="todo">
            {props.dataTodo.map((item)=> {
              return (
              <div className="task">
                <p>{item}</p>
                <button>Delete</button>
              </div>)
            })
            }
        </div>
    </>
  );
}

export default DataTodoList;