import { Input , Button , Checkbox } from '@headlessui/react'
import { useState } from 'react'


function App(){
  const [enabled, setEnabled] = useState(false)

  return (
    <>
      <div className="taskInput">
        <Input name="task" type="text" className="py-2 px-4"/>
        <Button className="rounded bg-sky-600 py-2 px-4 text-sm text0white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">Add Task</Button>
      </div>
      <div className="taskList">
      
    <h3 className="task">Start learning React</h3>
      </div>
    </>
  )}

export default App