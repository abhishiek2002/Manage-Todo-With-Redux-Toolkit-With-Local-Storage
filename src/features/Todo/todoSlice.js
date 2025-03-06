import { createSlice, nanoid } from "@reduxjs/toolkit";

// todos: [{
//   id: nanoid(),
//   text: "Hello",
//   completed: false,
// },]

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload, completed: false };
      if (state.todos !== null) {
        state.todos.push(todo);
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
      // getting errors in development phase because of push in null array. That's why debugging it
      else {
        state.todos = [todo];
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
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

// exporting actions

export const {
  addTodo,
  updateTodo,
  toggleComplete,
  deleteTodo,
  initialLocalTodos,
} = todoSlice.actions;

// exporting reducers

export default todoSlice.reducer;
