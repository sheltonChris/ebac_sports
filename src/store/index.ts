import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './carrinho/carrinhoSlice'
import { api } from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDIspatch = typeof store.dispatch
