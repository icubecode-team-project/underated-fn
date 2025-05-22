import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    isUserLogin: false,
    userObject: null,
  },
  reducers: {
    loginUser: (state, action) => {
      state.userObject = action.payload;
    },
    updateLogin: (state) => {
      state.isUserLogin = true;
    },
    updateLogout: (state) => {
      state.isUserLogin = false;
    },
  },
});

export default userSlice.reducer;
export const { loginUser, updateLogin, updateLogout } = userSlice.actions;
