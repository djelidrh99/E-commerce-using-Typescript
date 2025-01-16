import { createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from './thunk/getProductssThunk';

// Define a type for the slice state
interface productsState {
    record: {id:number,title:string,prefix:string,img:string}[],
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
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
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(fetchProducts.pending,(state,action)=>{
        state.loading='pending'

    }).addCase(fetchProducts.fulfilled,(state,action)=>{
        state.loading='succeeded'
        state.record=action.payload
    }).addCase(fetchProducts.rejected,(state,action)=>{
        state.loading='failed'

    })

  }
   
})

export const { } = productsSlice.actions

// Other code such as selectors can use the imported `RootState` type


export default productsSlice.reducer