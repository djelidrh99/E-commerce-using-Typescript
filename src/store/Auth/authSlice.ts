import { createSlice } from "@reduxjs/toolkit";
import { Tloading } from "@type/type";
import { postAuthThunk } from "./thunk/postAuthThunk";

interface IAuthState {
    loading:Tloading
    error:null|string
}

const initialState:IAuthState ={
    loading:'idle',
    error: null,
}



export const authSlice =createSlice({
  name:"auth",
  initialState,
  reducers: {

  },
  extraReducers:(builder)=>{
    builder.addCase(postAuthThunk.pending,(state)=>{
        state.loading="pending"


    })
    builder.addCase(postAuthThunk.fulfilled,(state)=>{
        state.loading= "succeeded"
        state.error=null
    })
    builder.addCase(postAuthThunk.rejected,(state,action)=>{
        state.loading="failed"
        state.error= action.payload as string
        
    })
  } 

})

export  default authSlice.reducer