import { configureStore } from "@reduxjs/toolkit"
import studentReducer from "./studentSlice"

export const store2 = configureStore({
  reducer: {
    student: studentReducer
  }
})