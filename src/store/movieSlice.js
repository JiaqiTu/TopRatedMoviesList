import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  searchBox: "",
  currentPage: 1,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setSearch: (state, action) => {
      state.searchBox = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setMovies, setSearchBox, setCurrentPage } = movieSlice.actions;
export default movieSlice.reducer;
