import { Button } from "@headlessui/react";

// eslint-disable-next-line react/prop-types
function RemoveTask ({onClick}){
    return (
        <>
          <Button className="rounded bg-pink-600 py-2 px-8 text-sm text-white data-[hover]:bg-pink-500 data-[active]:bg-pink-700" onClick = {onClick}>
            Add Task
          </Button>
        </>
      );
}

export default RemoveTask;