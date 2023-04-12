import { configureStore } from "@reduxjs/toolkit";
import dayReducer from "../../features/daySlice";
import catReducer from "../../features/catSlice"

export const store = configureStore({
  reducer: {
    day: dayReducer,
    cat: catReducer
  },
});

