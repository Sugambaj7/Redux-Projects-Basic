import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoListComponent = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos, "yei ho");
  return (
    <div className="m-4 border rounded">
      <ul className="todo-list text-black">
        {todos.map((todo, index) => {
          return (
            <TodoItem key={index} id={todo.id} title={todo.title} status={todo.completed} />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoListComponent;
