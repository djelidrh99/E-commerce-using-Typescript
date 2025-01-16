import { RootState } from '@store/store';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { fetchCategories } from './thunk/getCategoriesThunk';

// Define a type for the slice state
interface CategoriesState {
    record: {id:number,title:string,prefix:string,img:string}[],
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error: null | string
}

// Define the initial state using that type
const initialState:CategoriesState = {
    record:[],
    loading: "idle",
    error:null
}

export const categoriesSlice = createSlice({
  name: 'categories',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(fetchCategories.pending,(state,action)=>{
        state.loading='pending'

    }).addCase(fetchCategories.fulfilled,(state,action)=>{
        state.loading='succeeded'
        state.record=action.payload
    }).addCase(fetchCategories.rejected,(state,action)=>{
        state.loading='failed'

    })

  }
   
})

export const { } = categoriesSlice.actions

// Other code such as selectors can use the imported `RootState` type


export default categoriesSlice.reducer