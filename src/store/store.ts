import { configureStore,combineReducers } from '@reduxjs/toolkit'
import categories from '@store/categories/categoriesSlice'
import products from '@store/products/productsSlice'
import cart from '@store/Cart/carteSlice'
import { persistStore, persistReducer, FLUSH, PERSIST, PURGE, PAUSE, REGISTER, REHYDRATE } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import  wishlist  from './Wishlist/wishlistSlice'
import auth from './Auth/authSlice'






const itemsPersistConfig = {
  key: 'cart',
  storage,
  whitelist: ['items']

}

const whishlistPersistConfig ={
  key: 'whishlist',
  storage,
  whitelist: ['wishlistItems']

}

const rootReducers = combineReducers({
  categories,
    products,
    wishlist:persistReducer(whishlistPersistConfig, wishlist),
    cart:persistReducer(itemsPersistConfig, cart),
    auth

})




export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck:{
      ignoredActions:[PERSIST,FLUSH,PURGE,PAUSE,REGISTER,REHYDRATE]
    }
  })
  
})



export let persistor = persistStore(store)


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


