import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../redux/slice/todoSlice.jsx";

const FormComponent = () => {
  const [newTodo, setnewTodo] = useState([]);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo({ title: newTodo }));
    console.log(newTodo);
  };
  return (
    <div className="mt-3">
      <form action="" onSubmit={handleSubmit}>
        <input
          className="w-[100%] border border-grey-300 px-2 py-1"
          type="text"
          onChange={(event) => setnewTodo(event.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-3 py-1 mt-2 rounded"
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
