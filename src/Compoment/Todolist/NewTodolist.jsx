import { useState } from 'react';
import './style.css'
let AddTodo = (props) => {
  const [jobs,setJobs] = useState('Duy')
  let handleOnchange = (name) => {
    setJobs(name)
  }
  // let handleClick= (data) => {
  //   alert(data)
  // }
  const { AddList } = props
  
  return (
    <>
      <input type="text" id='add_new' 
      placeholder="Add a new task" 
      onChange={(event)=>{handleOnchange(event.target.value)}} 
      value={jobs}  
      />
      <button onClick={()=>{
        AddList(jobs)
        setJobs("")
        }} 
        >Add</button>
      <div>{jobs}</div>
    </>
  );
};
export default AddTodo;
