import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: "book",
  initialState: { facts:[] },
  reducers: {
    addFact: (state, action) => {
      state.facts = [...state.facts, action.payload];
    },
    removeFact: (state, action) => {
      state.facts = state.facts.filter(fact => fact !== action.payload)
    },
  },
});

export const { addFact, removeFact } = bookSlice.actions;

export default bookSlice.reducer;