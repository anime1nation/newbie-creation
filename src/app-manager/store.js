import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./slices/contactSlice";
import feedbackSlice from "./slices/feedbackSlice";

export const Store = configureStore({
    reducer:{
        contact: contactSlice,
        feedback: feedbackSlice,
    },
});