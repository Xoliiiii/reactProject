import { Input , Button  } from '@headlessui/react'


function App(){
  return (
    <>
    <div className="container">
      <div className="taskInput">
        <Input name="task" type="text" className="py-2 px-4"/>
        <Button className="rounded bg-sky-600 py-2 px-4 text-sm text0white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">Add Task</Button>
      </div>
      <div className="taskList">
         <ul>
          <span>
            <input type="checkbox" name="taskButton" />
          </span>
          <span>
            <li>Start learning react now ma'am</li>
          </span>
         </ul>
      </div>
    </div>
    </>
  )}

export default App