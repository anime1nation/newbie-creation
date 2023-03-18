import { createSlice } from "@reduxjs/toolkit";
import{ initialState } from './logininitialdata'

const loginSlice = createSlice({
    name:"login",
    initialState,
    reducers:{
        updatedUserName:(state,action)=>{
            state.userName=action.payload;
        },
        updatedPasword:(state,action)=>{
            state.pasword=action.payload;
        },
        resetForm:(state)=>{
            state.userName="";
            state.pasword=""
        },
    },
});

export const {updatedPasword,updatedUserName,resetForm}= loginSlice.actions
export default loginSlice.reducer;