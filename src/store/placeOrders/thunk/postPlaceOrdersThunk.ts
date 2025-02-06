import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/store";
import isAxiosErrorHandler from "@util/isAxiosErrorHandler";
import axios from "axios";




export const postPlaceOrdersThunk=createAsyncThunk("postOrders/postPlaceOrdersThunk",async (totalPrice:number,thunkApi)=>{

   const {rejectWithValue,getState} = thunkApi
   const {auth,cart}= getState() as RootState 
 
   const placeOrderProduct =cart.CartProductFullInfo.map((item)=>{
    return {
        id:item.id,
        title:item.title,
        quantity:cart.items[item.id],
        img:item.img,
        price:item.price 
    }
   })

   try {
       const res = await axios.post("orders",{userId:auth.user?.id,totalPrice:totalPrice,placeOrders:placeOrderProduct})

       return res.data
   } catch (error) {
       return rejectWithValue(isAxiosErrorHandler(error))
   }







})