import { createSlice } from "@reduxjs/toolkit";
import { deleteUsers } from "../actions";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    deleteIndividualUser(state, action) {
      state.splice(action.payload, 2);
      // console.log(action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(deleteUsers, () => {
      return [];
    });
  },
});

export default userSlice.reducer;
export const { addUser, deleteIndividualUser } = userSlice.actions;
