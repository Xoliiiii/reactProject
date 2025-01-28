import { Input } from "@headlessui/react";

// eslint-disable-next-line react/prop-types
function UserInput({ onBlur}) {
  return (
    <Input
      name="task"
      type="text"
      id="userInput"
      className="py-2 px-8 mt-3 mr-4"
      onBlur={onBlur}
    />
  );
}

export default UserInput;
