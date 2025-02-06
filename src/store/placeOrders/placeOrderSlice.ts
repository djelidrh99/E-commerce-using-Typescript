import { createSlice } from "@reduxjs/toolkit";
import { Tloading, TPlaceOrdersFullInfo } from "@type/type";
import { postPlaceOrdersThunk } from "./thunk/postPlaceOrdersThunk";
import { getOrdersThunk } from "./thunk/getOrdersThunk";

 interface IPlaceOrdersProps {
      placeOrdersFullInfo : TPlaceOrdersFullInfo[];
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
    reducers:{
        resetPlaceOrdersStatus:(state)=>{
            state.loading="idle"
            state.error=null
        },
        deletePlaceOrder:(state,action)=>{
            const id=action.payload
            const placeOrderUpdate=state.placeOrdersFullInfo.filter((order)=>order.id!==id)
            state.placeOrdersFullInfo=placeOrderUpdate
        }
    },
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

        builder.addCase(getOrdersThunk.pending,(state)=>{
            state.loading = "pending"
            state.error=null
        })
        builder.addCase(getOrdersThunk.fulfilled,(state,action)=>{
            state.loading="succeeded"
            state.placeOrdersFullInfo=action.payload
        })
        builder.addCase(getOrdersThunk.rejected,(state,action)=>{
            state.loading="failed"
            state.error = action.payload as string
        })

    }
})

getOrdersThunk
export default placeOrdersSlise.reducer

export const {resetPlaceOrdersStatus,deletePlaceOrder} = placeOrdersSlise.actions