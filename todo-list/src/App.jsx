import { Input } from '@headlessui/react';
import './App.css';
import Taskbutton from './components/Taskbutton';
import UserInput from './components/UserInput'



function App(){
  //I want the list to be empty , and the state should change based on what the user has inputted into the label


  return (
    <>
    <div className="container bg-pink-200 py-20 font-sans rounded-md shadow-2xl">
      <p className='text-4xl py-4 text-white'>Todo List</p>
        <div className="taskInput round ">
          <UserInput/>
          <Taskbutton />
        </div>
      <div className="taskList">
         <ul>
          <span>
            <Input type="checkbox" name="taskCheckbox"/>
          </span>
          <span>
            <ul>
            </ul>
          </span>
         </ul>
      </div>
    </div>
    </>
  )}

export default App