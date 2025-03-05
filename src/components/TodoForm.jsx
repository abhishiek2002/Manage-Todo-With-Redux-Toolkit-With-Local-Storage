import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/Todo/todoSlice";

const TodoForm = () => {
  const [msg, setMsg] = useState("");
  // const state = useSelector((state) => state);
  // console.log(state);

  const dispatch = useDispatch();

  const add = (e) => {
    e.preventDefault();
    dispatch(addTodo(msg));
    setMsg("")
  };

  return (
    <form onSubmit={add} className="flex gap-0">
      <input
        type="text"
        placeholder="Write a Todo..."
        className="w-full rounded-l-lg bg-gray-600 placeholder:text-gray-400 p-1.5 outline-none text-white"
        onChange={(e) => setMsg(e.target.value)}
        value={msg}
      />
      <button
        type="submit"
        className="bg-green-600 rounded-r-lg p-1.5 hover:brightness-90 cursor-pointer"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
