import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 username: null,
 isLogged: false,
 token: "",
 helper: false,
};

export const userSlice = createSlice({
 name: 'user',

  initialState,
 reducers: {
   setUsername: (state, action) => {
     state.username = action.payload
   },
   setConnectionStatus: (state, action) => {
    state.isLogged = !state.isLogged
    console.log(state.isLogged)
   },
   setToken: (state, action) => {
    state.token = action.payload
   },
   setHelper: (state, action) => {
    state.helper = !state.helper
   }
 },
});

export const { setUsername, setConnectionStatus, setToken, setHelper } = userSlice.actions;
export default userSlice.reducer;