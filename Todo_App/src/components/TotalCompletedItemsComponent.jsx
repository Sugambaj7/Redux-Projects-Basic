import React from "react";
import { useSelector } from "react-redux";

const TotalCompletedItemsComponent = () => {
  const completedTodos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );
  return (
    <div className="m-4 flex">
      <p className="font-bold text-lg">Total Completed Items: </p>
      <p className="text-lg ml-2">{completedTodos.length}</p>
    </div>
  );
};

export default TotalCompletedItemsComponent;
