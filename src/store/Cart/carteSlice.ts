import { createSlice } from '@reduxjs/toolkit'
import { Tproducts ,Tloading} from '@type/type';


// Define a type for the slice state
interface cartState {
        items: {[key:number]:number },
        productFullInfo: Tproducts[],
        
}

// Define the initial state using that type
const initialState:cartState = {
    items:{},
    productFullInfo:[] ,
    
}

export const cartSlice = createSlice({
  name: 'products',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addProductToCart:(state,actions)=>{
      console.log(actions.payload)
      if(state.items[actions.payload]) {
        state.items[actions.payload]++
      }else {
        state.items[actions.payload]=1
      }
    }
  },
  
   
})

export const {addProductToCart} = cartSlice.actions



export default cartSlice.reducer