import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers";

const Todo = () => {
  const [newTodo, setNewTodo] = useState("");
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const changeHandler = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <div>
      <h1>Todos Reduced</h1>
    </div>
  );
};

export default Todo;
