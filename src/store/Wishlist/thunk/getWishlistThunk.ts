import { createAsyncThunk } from "@reduxjs/toolkit";
import isAxiosErrorHandler from "@util/isAxiosErrorHandler";
import axios from "axios";




export const fetchWishlist = createAsyncThunk('shopingCart',
     async (_,thunkAPI)=> {

        const {rejectWithValue,signal,fulfillWithValue}=thunkAPI

        
            
       
        

        try {
                const response = await axios.get(`/wishlist?userId=1`,{signal})
                if(!(response.data).length) {
                   return fulfillWithValue([]) 
                }
                const idList =response.data.map((item:{userId:number,productId:number})=>{
                    return `id=${item.productId}&`  
                   }).join("")
                const wishlistProduct = await axios.get(`/products?${idList}`)   

             return wishlistProduct.data

            
            

        }     catch (error) {
            return rejectWithValue(isAxiosErrorHandler(error))
        
                }



})