import { createSlice } from "@reduxjs/toolkit";

export const nameSlice = createSlice({
    name: "catName",
    initialState: { value: ''},
    reducers: {
        updateCatName: (state, action) => {
            state.value = action.payload
        }
    }
});

export const { updateCatName } = nameSlice.actions;
export default nameSlice.reducer