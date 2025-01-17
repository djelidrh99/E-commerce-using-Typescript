import { createSlice } from '@reduxjs/toolkit'
import { fetchCategories } from './thunk/getCategoriesThunk';
import { Tcategories ,Tloading} from '@type/type';

// Define a type for the slice state
interface CategoriesState {
    record: Tcategories[],
    loading: Tloading,
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
    builder.addCase(fetchCategories.pending,(state)=>{
        state.loading='pending'
        state.error=null

    }).addCase(fetchCategories.fulfilled,(state,action)=>{
        state.loading='succeeded'
        state.record=action.payload
    }).addCase(fetchCategories.rejected,(state,action)=>{
        state.loading='failed'
        state.error =action.payload as string

    })

  }
   
})

export const { } = categoriesSlice.actions

// Other code such as selectors can use the imported `RootState` type


export default categoriesSlice.reducer