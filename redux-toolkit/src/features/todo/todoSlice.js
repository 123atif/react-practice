import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (removeSpecific) => removeSpecific.id !== action.payload
      );
    },
    updateTodo: (state, action) => {
      const { id, newText } = action.payload;
      state.todos = state.todos.map((editTodo) =>
        editTodo.id === id ? { ...editTodo, text: newText } : editTodo
      );
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
