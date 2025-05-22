import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./src/utils/movieSlice";
import modelReducer from "./src/utils/modelSlice";
import userReducer from "./src/utils/userSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    model: modelReducer,
    user: userReducer,
  },
});

export default store;
