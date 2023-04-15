import { createSlice } from "@reduxjs/toolkit";

export const daySlice = createSlice({
  name: "day",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    resetDay: (state) => {
      state.value = 0
    }
  },
});

export const { increment, resetDay } = daySlice.actions;

export default daySlice.reducer;