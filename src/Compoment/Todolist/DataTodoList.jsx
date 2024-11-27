import './style.css'

let DataTodoList = (props) => {
  const {dataTodo} = props
  return (
    <>
        <div className="todo">
            {dataTodo.map((item,index)=> {
              return (
              <div className="task" key = {index}>
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