import { createSlice } from "@reduxjs/toolkit";

const lightSlice = createSlice({
  name: "light",
  initialState: {
    isOn: false,
  },
  reducers: {
    turnOn: (state) => {
      state.isOn = true;
    },
    turnOff: (state) => {
      state.isOn = false;
    },
  },
});

export const { turnOn, turnOff } = lightSlice.actions;
export default lightSlice.reducer;