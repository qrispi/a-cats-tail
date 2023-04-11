import { configureStore } from "@reduxjs/toolkit";
import dayReducer from "../../features/daySlice";
import bookReducer from "../../features/bookSlice";

export const store = configureStore({
  reducer: {
    day: dayReducer,
    book: bookReducer,
  },
});

