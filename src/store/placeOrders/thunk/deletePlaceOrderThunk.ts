import { createAsyncThunk } from "@reduxjs/toolkit";
import isAxiosErrorHandler from "@util/isAxiosErrorHandler";
import axios from "axios";
import { RootState } from "@store/store";




export const deletePlaceOrderThunk=createAsyncThunk("Orders/deletePlaceOrderThunk",async (id:number,thunkApi)=>{

   const {rejectWithValue,getState} = thunkApi
   const {auth} = getState() as RootState
   
   
   

   try {
       const res = await  axios.get(`/orders?userId=${auth.user?.id}&id=${id}`)
       
       const resd = await  axios.delete(`/orders/${res.data[0].id}`)
      return resd.data
       

       return res.data
   } catch (error) {
       return rejectWithValue(isAxiosErrorHandler(error))
   }







})