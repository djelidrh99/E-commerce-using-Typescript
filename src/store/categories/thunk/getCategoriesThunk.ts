import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"



export const fetchCategories = createAsyncThunk(
    'categories',
    async () => {
        try {
            const categories = await axios.get("http://localhost:5005/categories")

            return categories.data
            // return {id:categories.id,title:categories.title,prefix:categories.prefix,img:categories.img }

        }
        catch {
            console.log("error")

        }
      
    },
  )