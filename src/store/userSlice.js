import { createSlice } from "@reduxjs/toolkit"

const userSlice=createSlice({
    name:'user',
    initialState:{
        id:'',
        token:'',
        user:{
            firstName:'',
            lastName:''
        },
        isLoggedIn:false
    },
    reducers:{
        login:(state,action)=>{
            state.id=action.payload.id;
            state.token=action.payload.token;
            state.user=action.payload.user;
            state.isLoggedIn=true;

        },
        logout:(state,action)=>{
            state.id="";
            state.token="";
            state.user="";
            state.isLoggedIn=false;
        }
    }
})

export const {login,logout}=userSlice.actions;
export default userSlice.reducer;