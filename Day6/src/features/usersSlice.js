import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    deleteUser: (state, action) => {
      return state.filter((user) => user.id !== action.payload.id);
    },
  },
});

export const { addUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;