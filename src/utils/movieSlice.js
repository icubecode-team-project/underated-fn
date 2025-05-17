import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    moviesList: [],
    movieDetails: null,
  },
  reducers: {
    addMoviesList: (state, action) => {
      state.moviesList = action.payload;
    },
    addMovieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const { addMoviesList, addMovieDetails } = movieSlice.actions;
