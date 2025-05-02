import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../store/auth/index.js'
import authReducer from "../store/auth/index.js"
import productReducer from '../store/admin/products-slice.js'

export const store = configureStore({
  reducer: {
    auth:authReducer,
    adminProducts:productReducer
    
  },
})