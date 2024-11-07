import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "preferList",
  initialState: { liked: [], disliked: [] },
  reducers: {
    // Handle liked list
    addLiked: (state, action) => {
      const isAlreadyLiked = state.liked.some(movie => movie.id === action.payload.id);
      if (!isAlreadyLiked) {
        state.liked.push(action.payload);
      }
      state.disliked = state.disliked.filter(movie => movie.id !== action.payload.id);
    },
    removeLiked: (state, action) => {
      state.liked = state.liked.filter(movie => movie.id !== action.payload.id);
    },

    //Handle disliked list
    addDisliked: (state, action) => {
      const isAlreadyDisliked = state.disliked.some(movie => movie.id === action.payload.id);
      if (!isAlreadyDisliked) {
        state.disliked.push(action.payload);
      }
      state.liked = state.liked.filter(movie => movie.id !== action.payload.id);
    },
    removeDisliked: (state, action) => {
      state.disliked = state.disliked.filter(movie => movie.id !== action.payload.id);
    }
  },
});

export const { addLiked, removeLiked, addDisliked, removeDisliked } = actions;
export const selectLiked = (state) => state.preferList.liked;
export const selectDisliked = (state) => state.preferList.disliked;

export default reducer;