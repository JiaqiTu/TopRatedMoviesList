import { configureStore } from "@reduxjs/toolkit";
import likedReducer from "./likedSlice";
import movieReducer from "./movieSlice";

const store = configureStore({
  reducer: {
    preferList: likedReducer,
    movies: movieReducer,
  },
});

export default store;
