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
        }
    }
});

export const { updateCatName, incrementCatMorality, decrementCatMorality } = catSlice.actions;
export default catSlice.reducer;