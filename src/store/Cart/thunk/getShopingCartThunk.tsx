import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/store";
import axios, { isAxiosError } from "axios";




export const fetchShopingCart = createAsyncThunk('shopingCart',
     async (_,thunkAPI)=> {

        const {getState,rejectWithValue}=thunkAPI

        const {cart} = getState() as RootState
        const items = Object.keys(cart.items)
        console.log(items)
        const idList =items.map((item)=>{
         return `id=${item}&`  
        }).join("")

        

        try {
            if(idList) {
                const response = await axios.get(`/products?${idList}`)

             return response.data

            } else {
                return []
            }
            

        }     catch (error) {
                    if(isAxiosError(error)) {
                        return rejectWithValue(error.response?.data.massege || error.message)
                    } else {
                        return rejectWithValue("failed to conection")
                    }
        
                   
        
                }



})