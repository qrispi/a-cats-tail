import { configureStore } from "@reduxjs/toolkit";
import dayReducer from "../../features/daySlice";

export const store = configureStore({
  reducer: {
    day: dayReducer,
  },
});