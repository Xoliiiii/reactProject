import "./App.css";
import RemoveTask from "./components/RemoveTask";
import Taskbutton from "./components/Taskbutton";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
 
//Need another state to track , to track the input 
const [input , setInput] = useState("");



  async function addTask(task) {
    setTasks((currentTasks) => [...currentTasks, task]);
  }

  function displayInput (e){
    setInput(e.target.value);
  } 



//function to remove button 
const removeItem = async (indexToRemove) => {
setTasks(tasks.filter((_, index)=> index != indexToRemove))
console.log("clicked")
}

  




  return (
    <>
      <div className="container bg-pink-200 py-20 font-sans rounded-md shadow-2xl">
        <p className="text-4xl py-4 text-white">Todo List</p>
        <div className="taskInput round ">
          <UserInput onBlur={displayInput} value={input}/>
          <Taskbutton
            onClick={() => {
              addTask(input);
            }}
          />
        
        </div>
        <div className="taskList mt-4">
  <ul>
    {tasks?.map((task, index) => (
      <li key={index}>
        {/* Button should appear when the task is added  */}
        {task} 
         <RemoveTask onClick={() => removeItem(index)}/>
      </li>
    ))}
  </ul>
</div>
      </div>
    </>
  );
}

export default App;
