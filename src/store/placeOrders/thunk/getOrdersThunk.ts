import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/store";
import { TPlaceOrdersFullInfo } from "@type/type";
import isAxiosErrorHandler from "@util/isAxiosErrorHandler";
import axios from "axios";




export const getOrdersThunk=createAsyncThunk("Orders/getOrdersThunk",async (_,thunkApi)=>{

   const {rejectWithValue,getState,signal} = thunkApi
   const {auth}= getState() as RootState 
 
   

   try {
       const res = await axios.get<TPlaceOrdersFullInfo[]>(`orders?userId=${auth.user?.id}`,{signal})
       

       return res.data
   } catch (error) {
       return rejectWithValue(isAxiosErrorHandler(error))
   }







})