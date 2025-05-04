import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./src/utils/movieSlice";

const store = configureStore({
  reducer: moviesReducer,
});

export default store;
