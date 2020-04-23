import React, { useState, useReducer } from "react";
import { todoReducer } from "../reducers/todoReducer";

import "./Todo.css";

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
      <h1 className="title">Todo List -Reduced-</h1>
      <form onSubmit={submitHandler}>
        <span>
          <input
            value={newTodo.item}
            onChange={changeHandler}
            placeholder="What's on your mind?"
          />
          <label>Add Todo</label>
        </span>
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
      <div className="button-effect">
        <button onClick={handleClear}>Clear Todos</button>
      </div>
    </div>
  );
};

export default Todo;
