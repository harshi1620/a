import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  name: "Tom",
  age: 20,
}

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    increaseAge: (state) => {
      state.age += 1;
    }
  },
})

export const { changeName, increaseAge } = studentSlice.actions

export default studentSlice.reducer