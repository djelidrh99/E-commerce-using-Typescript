import { createSlice } from '@reduxjs/toolkit'
import { Tproducts ,Tloading} from '@type/type';


// Define a type for the slice state
export interface wishlistState {
        wishlistItems: number[],
        productFullInfo: Tproducts[],
        loading:Tloading,
        error:null|string
        
}

// Define the initial state using that type
const initialState:wishlistState = {
    wishlistItems:[],
    productFullInfo:[] ,
    loading:"idle",
    error:null
    
}

export const wishlistSlice = createSlice({
  name: 'wishlist',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addProductTowishlist:(state,actions)=>{
        state.wishlistItems.push(actions.payload)
      
    },
    deleteProductFromwishlist:(state,action)=>{
       
     state.wishlistItems = state.wishlistItems.filter ((item)=>item!== action.payload)
        
    
      

    },
    updateItems:(state,action)=>{
      
      

    }
  },
//   extraReducers:(builser)=>{
//     builser.addCase(fetchShopingwishlist.pending,(state)=>{
//       state.loading="pending"
//       state.error=null
//     }).addCase(fetchShopingwishlist.fulfilled,(state,action)=>{
//       state.loading="succeeded"
//       state.error=null
//       state.productFullInfo=action.payload

//     }).addCase(fetchShopingwishlist.rejected,(state,action)=>{
//       state.loading="failed"
//       state.error=action.payload as string

//     })
//   }
  
   
})

export const {addProductTowishlist,deleteProductFromwishlist,updateItems} = wishlistSlice.actions



export default wishlistSlice.reducer