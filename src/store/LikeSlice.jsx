import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likedArray: [],
};

export const LikeSlice = createSlice({
  name: "LikeSlice",
  initialState,
  reducers: {
    addArray: (state, action) => {
      return {
        likedArray: [...state.likedArray, action.payload]
      }
    },
  },
});

export const { addArray } = LikeSlice.actions;
export default LikeSlice.reducer;
