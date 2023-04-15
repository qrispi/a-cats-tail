import { createSlice } from "@reduxjs/toolkit";

export const catSlice = createSlice({
    name: "cat",
    initialState: { name: '', morality: 0},
    reducers: {
        updateCatName: (state, action) => {
            state.name = action.payload;
        },
        incrementCatMorality: (state) => {
            state.morality += 1;
        },
        decrementCatMorality: (state) => {
            state.morality -= 1;
        },
        resetCatMorality: (state) => {
            state.morality = 0
        }
    }
});

export const { updateCatName, incrementCatMorality, decrementCatMorality, resetCatMorality } = catSlice.actions;
export default catSlice.reducer;