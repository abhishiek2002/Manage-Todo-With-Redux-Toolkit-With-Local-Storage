import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    todos: [
      // {
      //   id: nanoid(),
      //   text: "Hello",
      //   completed: false,
      // },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload, completed: false };
      state.todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.value }
          : todo
      );
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    toggleComplete: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    initialLocalTodos: (state, action) => {
      console.log(state.todos);
      // console.log(action.payload);
      state.todos = action.payload;
    },
  },
});

export const {
  addTodo,
  updateTodo,
  toggleComplete,
  deleteTodo,
  initialLocalTodos,
} = todoSlice.actions;

export default todoSlice.reducer;
