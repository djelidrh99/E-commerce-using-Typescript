import { createAsyncThunk } from "@reduxjs/toolkit"
import { Tproducts } from "@type/type"
import axios, { isAxiosError } from "axios"



export const fetchProducts = createAsyncThunk(
    'products',
    async (_,thunkAPI) => {
        const {rejectWithValue}=thunkAPI
        try {
            const products = await axios.get<Tproducts[]>("http://localhost:5005/products")

            return products.data
            // return {id:products.id,title:products.title,prefix:products.prefix,img:products.img }

        }
         catch (error) {
                    if(isAxiosError(error)) {
                        return rejectWithValue(error.response?.data.massege)
                    } else {
                        return rejectWithValue("failed to conection")
                    }
        
                   
        
                }
      
    },
  )