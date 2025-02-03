import { createAsyncThunk } from "@reduxjs/toolkit";
import isAxiosErrorHandler from "@util/isAxiosErrorHandler";
import axios from "axios";
import { RootState } from "@store/store";

type TFetchwishlist = "productFullInfo" | "itemId"


export const fetchWishlist = createAsyncThunk('wishlist/fetchWishlist',
     async (dataType:TFetchwishlist,thunkAPI)=> {

        const {rejectWithValue,signal,getState}=thunkAPI

        const {auth} = getState () as  RootState

        
            
       
        

        try {
                const response = await axios.get(`/wishlist?userId=${auth.user?.id}`,{signal})

                if((response.data).length===0) {
                  return {type:"productFullInfo" , fullProductInfo:[]}

                }

                const idList =response.data.map((item:{userId:number,productId:number})=>{
                  return item.productId  
                 })
               
                const idListTostring =response.data.map((item:{userId:number,productId:number})=>{
                    return `id=${item.productId}&`  
                   }).join("")
                
                
                if(dataType==="itemId") {
                  return {type:"itemId", idList}
                } else if (dataType==="productFullInfo") {
                  const wishlistProduct = await axios.get(`/products?${(idListTostring)}`)
                  return {type:"productFullInfo" , fullProductInfo:wishlistProduct.data}

                }

               
                

             

            
            

        }     catch (error) {
            return rejectWithValue(isAxiosErrorHandler(error))
        
                }



})