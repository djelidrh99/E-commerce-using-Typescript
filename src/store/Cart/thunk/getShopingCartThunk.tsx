import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/store";
import isAxiosErrorHandler from "@util/isAxiosErrorHandler";
import axios from "axios";




export const fetchShopingCart = createAsyncThunk('shopingCart',
     async (_,thunkAPI)=> {

        const {getState,rejectWithValue,fulfillWithValue,signal}=thunkAPI

        const {cart} = getState() as RootState
        const items = Object.keys(cart.items)
        const idList =items.map((item)=>{
         return `id=${item}&`  
        }).join("")
            
        if(!idList) {
            return fulfillWithValue([])
        }
        

        try {
                const response = await axios.get(`/products?${idList}`,{signal})

             return response.data

            
            

        }     catch (error) {
            return rejectWithValue(isAxiosErrorHandler(error))
                   
        
                }



})