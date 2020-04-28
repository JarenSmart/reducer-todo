export const todoReducer = (state = [], { type, item, completed, id }) => {
  switch (type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, { item, completed }],
      };
    case "TOGGLE_TODO":
      return {
        todos: state.todos.map((todo, index) =>
          index === id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case "CLEAR_TODOS":
      return {
        todos: state.todos.filter((todo) => !todo.completed),
      };
    default:
      return state;
  }
};
