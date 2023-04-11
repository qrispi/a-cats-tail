import { configureStore } from "@reduxjs/toolkit";
import dayReducer from "../../features/daySlice";
import catNameReducer from "../../features/nameSlice"

export const store = configureStore({
  reducer: {
    day: dayReducer,
    catName: catNameReducer
  },
});

