import { createSlice } from "@reduxjs/toolkit";
import storyData from "../data/story-data";

export const storySlice = createSlice({
  name: "storyline",
  initialState: storyData,
  reducers: {
    addName: (state, action) => {
      state.storyline = action.payload
    },
  },
});

export default storySlice.reducer;