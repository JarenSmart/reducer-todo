import React, { useState, useReducer } from "react";
import { todoReducer } from "../reducers/todoReducer";

export const initialState = {
  item: "",
  completed: false,
};

const Todo = () => {
  const [newTodo, setNewTodo] = useState(initialState);
  const [{ todos }, dispatch] = useReducer(todoReducer, { todos: [] });

  const changeHandler = (e) => {
    const newItem = {
      ...newTodo,
      item: e.target.value,
    };
    setNewTodo(newItem);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", ...newTodo });
    setNewTodo(initialState);
  };

  const handleClear = () => dispatch({ type: "CLEAR_TODOS" });

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input value={newTodo.item} onChange={changeHandler} />
      </form>
      {todos.map((text, index) => (
        <div
          key={index}
          onClick={() => dispatch({ type: "TOGGLE_TODO", id: index })}
          style={{
            textDecoration: text.completed ? "line-through" : "",
          }}
        >
          {text.item}
        </div>
      ))}
      <button onClick={handleClear}>Clear Todos</button>
    </div>
  );
};

export default Todo;
