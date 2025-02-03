import { createSlice } from '@reduxjs/toolkit'
import { Tproducts ,Tloading} from '@type/type';
import { fetchWishlist } from './thunk/getWishlistThunk';
import { getToggleLike } from './thunk/getToggleLike';
import { authLogOut } from '@store/Auth/authSlice';


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
    wishlistCleanUp:(state)=>{
     state.productFullInfo=[]
    }
 
  },
  extraReducers:(builder)=>{
    builder.addCase(getToggleLike.pending,(state)=>{
      state.error=null
    }).addCase(getToggleLike.fulfilled,(state,action)=>{
      if(action.payload.type==="add") {
        state.wishlistItems.push(action.payload.id)
      } else if(action.payload.type === "remove"){
       state.wishlistItems = state.wishlistItems.filter((item)=>item !== action.payload.id)
       state.productFullInfo = state.productFullInfo.filter((item)=>item.id !== action.payload.id)
      }
    

    }).addCase(getToggleLike.rejected,(state,action)=>{
      
      state.error=action.payload as string

    })


    builder.addCase(fetchWishlist.pending,(state)=>{
      state.loading="pending"
      state.error=null
    }).addCase(fetchWishlist.fulfilled,(state,action)=>{
      state.loading="succeeded"
      state.error=null
      if(action.payload?.type=="itemId") {
        state.wishlistItems=action.payload.idList

      } else if(action.payload?.type==="productFullInfo") {
        state.productFullInfo=action.payload.fullProductInfo
      }
      

    }).addCase(fetchWishlist.rejected,(state,action)=>{
      state.loading="failed"
      state.error=action.payload as string

    })


    // LogOut
    builder.addCase(authLogOut,(state)=>{
      state.wishlistItems=[]

    })


 


  }

  //LogOut
  
   
})

export const {wishlistCleanUp} = wishlistSlice.actions



export default wishlistSlice.reducer