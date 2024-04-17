import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete } from "../redux/slice/todoSlice";
import { deleteTodo } from "../redux/slice/todoSlice";

const TodoItem = ({ id, title, status }) => {
  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    dispatch(toggleComplete({ id: id, completed: !status }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo({ id: id }));
  };
  return (
    <li className="mt-2 px-4 pb-2 border-b">
      <div className="flex justify-between">
        <input
          type="checkbox"
          checked={status}
          onChange={handleCheckboxClick}
        />
        <p>{title}</p>
        <button
          className="bg-red-500 px-4 py-1 rounded text-white"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
