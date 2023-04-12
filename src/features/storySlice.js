import { createSlice } from "@reduxjs/toolkit";
import storyData from "../data/story-data";

export const storySlice = createSlice({
  name: "storyline",
  initialState: storyData,
  reducers: {},
});

export default storySlice.reducer;