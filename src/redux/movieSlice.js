import { createSlice } from "@reduxjs/toolkit";

const initialSate = {
  movies: [],
  SearchBox: "",
  currentPage: "1",
};

const movieSlice = createSlice({
  name: "movies",
  initialSate,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setSearchBox: (state, action) => {
      state.SearchBox = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setMovies, setSearchBox, setCurrentPage } = movieSlice.actions;
export default movieSlice.reducer;
