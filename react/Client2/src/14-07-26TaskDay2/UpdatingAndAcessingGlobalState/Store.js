import { configureStore } from "@reduxjs/toolkit";
import lightReducer from "./lightSlice";

export const store3 = configureStore({
  reducer: {
    light: lightReducer,
  },
});