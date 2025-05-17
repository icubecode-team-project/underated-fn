import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./src/utils/movieSlice";
import modelReducer from "./src/utils/modelSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    model: modelReducer,
  },
});

export default store;
