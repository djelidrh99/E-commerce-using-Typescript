import { createAsyncThunk } from "@reduxjs/toolkit"
import { Tcategories } from "@type/type"
import axios from "axios"
import { isAxiosError } from "axios"



export const fetchCategories = createAsyncThunk(
    'categories',
    async (_,thunkAPI) => {

        const {rejectWithValue}=thunkAPI
        try {
            const response = await axios.get<Tcategories[]>("http://localhost:5005/categories")

            return response.data
            // return {id:categories.id,title:categories.title,prefix:categories.prefix,img:categories.img }

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