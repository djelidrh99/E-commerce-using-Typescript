import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/store";
import isAxiosErrorHandler from "@util/isAxiosErrorHandler";
import axios from "axios";
  



export const getToggleLike  = createAsyncThunk(
  "wishlist/getToggleLike",
  async (id:number, thunkAPI) => {
    const {  rejectWithValue ,signal,getState} = thunkAPI;
   const {auth}=getState() as RootState
   const {user}=auth


    try {
        const isProductexist= await axios.get(`/wishlist?userId=${user?.id}&productId=${id}`,{signal})
        if(isProductexist.data.length>0) {
            await axios.delete(`/wishlist/${isProductexist.data[0].id}`)
            return {type:"remove", id}

        }else {
            await axios.post(`/wishlist?userId=1`,{userId:user?.id,productId:id})
            return {type:"add", id}
        }

      
        
       

    } catch (error) {
      return rejectWithValue(isAxiosErrorHandler(error))
    }
  }
);
