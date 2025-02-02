import { createSlice } from "@reduxjs/toolkit";
import { Tloading } from "@type/type";
import { postAuthThunk } from "./thunk/postAuthThunk";
import { postSigniInThunk } from "./thunk/postSigniInThunk";

interface IAuthState {
  loading: Tloading;
  error: null | string;
  accessToken:null | string
  user:null| {
    email:string;
    password:string
    firstName:string;
    lastName:string
    id:number

  } 
}

const initialState: IAuthState = {
  loading: "idle",
  error: null,
  accessToken:null,
  user : null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetLoadingError:(state)=>{
    state.loading="idle"
    state.error=null
    },
    authLogOut:(state)=>{
      state.accessToken=null
      state.user=null
    }
  },
  extraReducers: (builder) => {
    builder.addCase(postAuthThunk.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(postAuthThunk.fulfilled, (state) => {
      state.loading = "succeeded";
      state.error = null;
    });
    builder.addCase(postAuthThunk.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });

    //Sign In builder
    builder.addCase(postSigniInThunk.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(postSigniInThunk.fulfilled, (state,action) => {
      state.loading = "succeeded";
      state.accessToken=action.payload.accessToken as string
      state.user=action.payload.user
    });
    builder.addCase(postSigniInThunk.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
  },
});

export default authSlice.reducer;

export const {resetLoadingError,authLogOut}=authSlice.actions
