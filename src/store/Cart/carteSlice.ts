import { fetchShopingCart } from '@store/Cart/thunk/getShopingCartThunk';
import { createSlice } from '@reduxjs/toolkit'
import { Tproducts ,Tloading} from '@type/type';


// Define a type for the slice state
export interface cartState {
        items: {[key:number]:number },
        CartProductFullInfo: Tproducts[],
        loading:Tloading,
        error:null|string
        
}

// Define the initial state using that type
const initialState:cartState = {
    items:{},
    CartProductFullInfo:[] ,
    loading:"idle",
    error:null
    
}

export const cartSlice = createSlice({
  name: 'products',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addProductToCart:(state,actions)=>{
      if(state.items[actions.payload]) {
        state.items[actions.payload]++
      }else {
        state.items[actions.payload]=1
      }
    },
    deleteProductFromShopingCart:(state,action)=>{
      const updateCart = (state.CartProductFullInfo).filter((item)=>{
        return item.id !== action.payload
      })
      delete state.items[action.payload]

      state.CartProductFullInfo=updateCart

    },
    updateItems:(state,action)=>{
      const count = Number(action.payload.newCount)
      state.items[action.payload.id]=count
      

    },
    cartProductsCleanUp:(state)=>{
      state.CartProductFullInfo=[]
    }
  },
  extraReducers:(builser)=>{
    builser.addCase(fetchShopingCart.pending,(state)=>{
      state.loading="pending"
      state.error=null
    }).addCase(fetchShopingCart.fulfilled,(state,action)=>{
      state.loading="succeeded"
      state.error=null
      state.CartProductFullInfo=action.payload

    }).addCase(fetchShopingCart.rejected,(state,action)=>{
      state.loading="failed"
      state.error=action.payload as string

    })
  }
  
   
})

export const {addProductToCart,deleteProductFromShopingCart,updateItems,cartProductsCleanUp} = cartSlice.actions



export default cartSlice.reducer