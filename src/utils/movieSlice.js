import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    moviesList: [],
  },
  reducers: {
    addMovesList: (state, action) => {
      state.moviesList = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const { addMovesList } = movieSlice.actions;
