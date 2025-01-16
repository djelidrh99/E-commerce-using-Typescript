import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"



export const fetchProducts = createAsyncThunk(
    'products',
    async () => {
        try {
            const products = await axios.get("http://localhost:5005/products")

            return products.data
            // return {id:products.id,title:products.title,prefix:products.prefix,img:products.img }

        }
        catch {
            console.log("error")

        }
      
    },
  )