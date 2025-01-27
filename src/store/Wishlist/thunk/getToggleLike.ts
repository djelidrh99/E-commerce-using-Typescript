import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

export const getToggleLike  = createAsyncThunk(
  "wishlist/getToggleLike",
  async (id:number, thunkAPI) => {
    const {  rejectWithValue } = thunkAPI;


    try {
        const isProductexist= await axios.get(`/wishlist?userId=1&productId=${id}`)
        if(isProductexist.data.length>0) {
            await axios.delete(`/wishlist/${isProductexist.data[0].id}`)
            return {type:"remove", id}

        }else {
            await axios.post(`/wishlist?userId=1`,{userId:1,productId:id})
            return {type:"add", id}
        }
       

    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data.massege || error.message);
      } else {
        return rejectWithValue("failed to conection");
      }
    }
  }
);
