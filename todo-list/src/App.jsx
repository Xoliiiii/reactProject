import { Input } from '@headlessui/react';
import './App.css';
import Taskbutton from './components/Taskbutton';
import { useState } from "react";
import UserInput from './components/UserInput'



function App(){
  //I want the list to be empty , and the state should change based on what the user has inputted into the label
  const [tasks , setTask] = useState([])

  const userTask = (e) => {
    setTask(e.target.value)
  }

  const handleEvent = (e) => {
    e.preventDefault();
   setTask(...tasks,task)
    
  }



  return (
    <>
    <div className="container bg-pink-200 py-20 font-sans rounded-md shadow-2xl">
      <p className='text-4xl py-4 text-white'>Todo List</p>
        <div className="taskInput round ">
          <UserInput onChange={userTask} value={tasks}/>
          <Taskbutton onClick={handleEvent}/>
        </div>
      <div className="taskList">
         <ul>
          <span>
            <Input type="checkbox" name="taskCheckbox"/>
          </span>
          <span>
            <ul>
            {tasks.map((task, index) => (
      <li key={index}>{task}</li>
    ))}
            </ul>
          </span>
         </ul>
      </div>
    </div>
    </>
  )}

export default App