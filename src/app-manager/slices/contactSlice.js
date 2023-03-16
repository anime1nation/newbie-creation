import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialdata";

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    updatedName: (state, action) => {
      state.name = action.payload;
    },
    updatedPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    updatedMessage: (state, action) => {
      state.message = action.payload;
    },
    resetForm: (state) => {
      state.name = "";
      state.phoneNumber = "";
      state.message = "";
    },
  },
});
export const { updatedName, updatedPhoneNumber, updatedMessage, resetForm } =
  contactSlice.actions;

export default contactSlice.reducer;
