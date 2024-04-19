import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../redux/slice/todoSlice";
import TodoItem from "./TodoItem";

const TodoListComponent = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  return (
    <div className="m-4 border rounded">
      <ul className="todo-list text-black">
        {todos.data.map((todo, index) => {
          return (
            <TodoItem
              key={index}
              id={todo.id}
              title={todo.title}
              status={todo.completed}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoListComponent;
