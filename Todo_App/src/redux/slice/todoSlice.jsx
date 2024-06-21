import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("fetchtodos", async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  return response.json();
});

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    isLoading: false,
    isError: false,
    data: [],
  },

  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.data.push(newTodo);
    },
    toggleComplete: (state, action) => {
      const index = state.data.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.data[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      state.data = state.data.filter((todo) => todo.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default todoSlice.reducer;
export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
