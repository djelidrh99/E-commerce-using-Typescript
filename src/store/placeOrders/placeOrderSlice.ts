import { createSlice } from "@reduxjs/toolkit";
import { Tloading, TplaceOrderProduct } from "@type/type";
import { postPlaceOrdersThunk } from "./thunk/postPlaceOrdersThunk";

interface IPlaceOrdersProps {
      placeOrdersFullInfo : {
        userId:number;
        totalPrice:number;
        placeOrders:TplaceOrderProduct[]
      }[];
      loading: Tloading;
      error: null | string
}


const initialState:IPlaceOrdersProps= {
    placeOrdersFullInfo:[],
    loading:"idle",
    error:null
}



export const placeOrdersSlise=createSlice({
    name:"placeOrders",
    initialState,
    reducers:{},
    extraReducers:builder=>{
        builder.addCase(postPlaceOrdersThunk.pending,(state)=>{
            state.loading = "pending"
            state.error=null
        })
        builder.addCase(postPlaceOrdersThunk.fulfilled,(state)=>{
            state.loading="succeeded"
        })
        builder.addCase(postPlaceOrdersThunk.rejected,(state,action)=>{
            state.loading="failed"
            state.error = action.payload as string
        })

    }
})


export default placeOrdersSlise.reducer