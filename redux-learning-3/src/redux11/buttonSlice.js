import { createSlice } from "@reduxjs/toolkit";

const buttonSlice = createSlice({
  name: "button",
  initialState: { value: true },
  reducers: {
    changeColor: (state,action) => {
      state.value = action.payload;
    },
  },
});

export const { changeColor } = buttonSlice.actions;
export default buttonSlice.reducer;
