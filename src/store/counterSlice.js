import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:'counter',
    initialState:{
        counter:0
    },
    reducers:{
        increment:(state,action)=>{
            console.log("testing working")
            state.counter=state.counter+1
        },
        decrement:(state,action)=>{
            state.counter=state.counter-1
        }
    }
})

export const {increment,decrement}=counterSlice.actions;
export default counterSlice.reducer;