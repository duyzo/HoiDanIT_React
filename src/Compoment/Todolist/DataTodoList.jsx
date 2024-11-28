import './style.css'

let DataTodoList = (props) => {
  const {Todolist} = props
  
  
  return (
    <>
        <div className="todo">
              
              {Todolist.map((item)=>{
                return (
                  <>
                  <div className="task" key = {item.id} >
                    <p>{item.name}</p>
                    <button>Delete</button>
                  </div>
                  </>
                )
              })}
             
          
            
            
        </div>
    </>
  );
}

export default DataTodoList;