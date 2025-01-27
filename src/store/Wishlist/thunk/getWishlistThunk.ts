import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/store";
import axios, { isAxiosError } from "axios";




export const fetchWishlist = createAsyncThunk('shopingCart',
     async (_,thunkAPI)=> {

        const {getState,rejectWithValue,fulfillWithValue}=thunkAPI

        const {wishlist} = getState() as RootState
        
            
       
        

        try {
                const response = await axios.get(`/wishlist?userId=1`)
                console.log(response.data)
                const idList =response.data.map((item:{userId:number,productId:number})=>{
                    return `id=${item.productId}&`  
                   }).join("")
                const wishlistProduct = await axios.get(`/products?${idList}`)   
                console.log(wishlistProduct)

             return wishlistProduct.data

            
            

        }     catch (error) {
                    if(isAxiosError(error)) {
                        return rejectWithValue(error.response?.data.massege || error.message)
                    } else {
                        return rejectWithValue("failed to conection")
                    }
        
                   
        
                }



})