import { useState } from 'react';
import './style.css'
let AddTodo = () => {
  const [jobs,setJobs] = useState('Duy')
  let handleOnchange = (name) => {
    setJobs(name)
  }
  let handleClick= (data) => {
    alert(data)
  }
  return (
    <>
      <input type="text" id='add_new' placeholder="Add a new task" onChange={(event)=>{handleOnchange(event.target.value)}} />
      <button onClick={()=>handleClick(jobs)} >Add</button>
      <div>{jobs}</div>
    </>
  );
};
export default AddTodo;
