import { createAsyncThunk } from "@reduxjs/toolkit"
import { Tcategories } from "@type/type"
import isAxiosErrorHandler from "@util/isAxiosErrorHandler"
import axios from "axios"



export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async (_,thunkAPI) => {

        const {rejectWithValue,signal}=thunkAPI
        try {
            const response = await axios.get<Tcategories>("/categories",{signal})

            return response.data
            // return {id:categories.id,title:categories.title,prefix:categories.prefix,img:categories.img }

        }
        catch (error) {
            
           return rejectWithValue(isAxiosErrorHandler(error))
           

        }
      
    },
  )