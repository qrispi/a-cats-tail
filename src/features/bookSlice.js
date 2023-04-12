import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: "book",
  initialState: { facts:[] },
  reducers: {
    addFact: (state, action) => {
      state.facts = [...state.facts, action.payload];
    },
  },
});

export const { addFact } = bookSlice.actions;

export default bookSlice.reducer;