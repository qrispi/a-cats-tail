import { createSlice } from "@reduxjs/toolkit";
import storyData from "../data/story-data";

export const storySlice = createSlice({
  name: "storyline",
  initialState: storyData,
  reducers: {
    addName: (state, action) => action.payload
  },
});

export const { addName } = storySlice.actions;

export default storySlice.reducer;