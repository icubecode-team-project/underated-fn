import { createSlice } from "@reduxjs/toolkit";

const modelSlice = createSlice({
  name: "model",
  initialState: {
    showModel: false,
  },
  reducers: {
    toggleModel: (state) => {
      state.showModel = !state.showModel;
    },
    openModel: (state) => {
      state.showModel = true;
    },
    closeModel: (state) => {
      state.showModel = false;
    },
  },
});

export default modelSlice.reducer;
export const { toggleModel, openModel, closeModel } = modelSlice.actions;
