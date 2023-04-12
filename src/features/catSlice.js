import { createSlice } from "@reduxjs/toolkit";

export const catSlice = createSlice({
    name: "cat",
    initialState: { name: ''},
    reducers: {
        updateCatName: (state, action) => {
            state.name = action.payload
        }
    }
});

export const { updateCatName } = catSlice.actions;
export default catSlice.reducer