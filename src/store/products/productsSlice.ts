import { createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from './thunk/getProductssThunk';
import { Tproducts ,Tloading} from '@type/type';


// Define a type for the slice state
interface productsState {
        record: Tproducts[],
        loading: Tloading,
        error: null | string
}

// Define the initial state using that type
const initialState:productsState = {
    record:[],
    loading: "idle",
    error:null
}

export const productsSlice = createSlice({
  name: 'products',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    productsCleanUp:(state)=>{
      state.record=[]
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchProducts.pending,(state)=>{
        state.loading='pending'
        state.error=null

    }).addCase(fetchProducts.fulfilled,(state,action)=>{
        state.loading='succeeded'
        state.record=action.payload
    }).addCase(fetchProducts.rejected,(state,action)=>{
        state.loading='failed'
        state.error=action.payload as string

    })

  }
   
})

export const {productsCleanUp} = productsSlice.actions



export default productsSlice.reducer