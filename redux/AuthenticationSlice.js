import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  authenticate: [],
};

export const authenticationSlice = createSlice({
  name: 'authenticate',
  initialState,
  reducers: {
    addAuth: (state, action) => {
      state.authenticate.push(action.payload);
    },
  },
});

export const {addAuth} = authenticationSlice.actions;
export const selectAllAuth = state => state.authenticate.authenticate;
export default authenticationSlice.reducer;
