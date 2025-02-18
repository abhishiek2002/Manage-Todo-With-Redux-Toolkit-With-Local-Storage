import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    todos: [
      {
        id: 1,
        text: "Hello",
        completed: false,
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push = action.payload;
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
