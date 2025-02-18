import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo, toggleComplete, deleteTodo } from "../features/Todo/todoSlice";

const TodoList = ({ todo }) => {
  const { id, text, completed } = todo;
  const [isEditable, setIsEditable] = useState(false);
  const dispatch = useDispatch();

  const edit = (value) => {
    const info = { id, value };
    dispatch(updateTodo(info));
  };

  const toggleCompleted = () => {
    dispatch(toggleComplete(id));
  };

  const deleted = () => {
    dispatch(deleteTodo(id))
  }

  return (
    <div className={`flex gap-2 justify-around shadow-md shadow-white rounded-lg p-2 ${completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}>
      <input type="checkbox" checked={completed} onChange={toggleCompleted} />
      <input
        type="text"
        className={`w-3/5 ${
          isEditable ? "outline-1" : "outline-none"
        } ${completed ? "line-through" : "" } rounded-lg p-1.5`}
        value={todo.text}
        readOnly={!isEditable}
        onChange={(e) => edit(e.target.value)}
      />
      <button
        className="bg-white p-1.5 rounded-lg cursor-pointer"
        onClick={() => setIsEditable((prev) => !prev)}
      >
        {isEditable ? "📁" : "✏️"}
      </button>
      <button className="bg-white p-1.5 rounded-lg cursor-pointer" onClick={deleted}>❌</button>
    </div>
  );
};

export default TodoList;
