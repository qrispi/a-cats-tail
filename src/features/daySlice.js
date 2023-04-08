import { createSlice } from "@reduxjs/toolkit";

export const daySlice = createSlice({
  name: "day",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = daySlice.actions;

export default daySlice.reducer;
