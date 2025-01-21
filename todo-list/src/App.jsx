import { Input , Button  } from '@headlessui/react'
import './App.css'


function App(){
  return (
    <>
    <div className="container bg-pink-200 py-20 font-sans rounded-md shadow-2xl">
      <p className='text-4xl py-4 text-white'>Todo List</p>
      <div className="taskInput round ">
        <Input name="task" type="text" className="py-2 px-8 mt-3 mr-4"/>
        <Button className="rounded bg-pink-600 py-2 px-8 text-sm text-white data-[hover]:bg-pink-500 data-[active]:bg-pink-700" >Add Task</Button>
      </div>
      <div className="taskList">
         <ul>
          <span>
            <Input type="checkbox" name="taskButton" />
          </span>
          <span>
            <li>Start learning react now maam</li>
          </span>
         </ul>
      </div>
    </div>
    </>
  )}

export default App