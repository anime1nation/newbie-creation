import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./feedbackinitialdata";

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    addFeedbackMessage: (state, action) => {
      state.message = action.payload.message;
      state.status = action.payload.status;
      state.sent = true;
    },
    removeFeedbackMessage: (state) => {
      state.message = "";
      state.sent = false;
      state.status = "success";
    },
  },
});

export const { addFeedbackMessage, removeFeedbackMessage } =
  feedbackSlice.actions;

export default feedbackSlice.reducer;
