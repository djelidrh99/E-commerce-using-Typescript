import { createAsyncThunk } from "@reduxjs/toolkit";
import isAxiosErrorHandler from "@util/isAxiosErrorHandler";
import axios from "axios";




export const fetchWishlist = createAsyncThunk('shopingCart',
     async (_,thunkAPI)=> {

        const {rejectWithValue,signal}=thunkAPI

        
            
       
        

        try {
                const response = await axios.get(`/wishlist?userId=1`,{signal})
                const idList =response.data.map((item:{userId:number,productId:number})=>{
                    return `id=${item.productId}&`  
                   }).join("")
                const wishlistProduct = await axios.get(`/products?${idList}`)   

             return wishlistProduct.data

            
            

        }     catch (error) {
            return rejectWithValue(isAxiosErrorHandler(error))
        
                }



})