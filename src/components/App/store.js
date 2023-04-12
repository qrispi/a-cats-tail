import { configureStore } from "@reduxjs/toolkit";
import dayReducer from "../../features/daySlice";
import catReducer from "../../features/catSlice"
import bookReducer from "../../features/bookSlice";
import storyReducer from "../../features/storySlice";

export const store = configureStore({
  reducer: {
    day: dayReducer,
    cat: catReducer,
    book: bookReducer,
    storyline: storyReducer,
  }
});