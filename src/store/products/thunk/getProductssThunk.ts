import { createAsyncThunk } from "@reduxjs/toolkit"
import { Tproducts } from "@type/type"
import isAxiosErrorHandler from "@util/isAxiosErrorHandler"
import axios from "axios"



export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_,thunkAPI) => {
        const {rejectWithValue,signal}=thunkAPI
        try {
            const products = await axios.get<Tproducts[]>("/products",{signal})

            return products.data
            // return {id:products.id,title:products.title,prefix:products.prefix,img:products.img }

        }
         catch (error) {
            return rejectWithValue(isAxiosErrorHandler(error))
        
                }
      
    },
  )