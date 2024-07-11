import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counter/counterSlice'
import { api } from './api'
import wishlistSlice from './features/wishlist/wishlistSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        counter: counterSlice,
        [api.reducerPath]: api.reducer,
        wishlist: wishlistSlice,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  })
}
