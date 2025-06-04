import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../store/auth/index.js'
import authReducer from "../store/auth/index.js"
import productReducer from '../store/admin/products-slice.js'
import shopCartSlice from "../store/shop/cart/index.js"
import addressSlice from "../store/shop/adress/index.js"
import shopOrderSlice from '../store/shop/order/index.js'
import adminOrderSlice from '../store/admin/order/index.js'
import productReviewSlice from "../store/shop/review/index.js"
import filterProductSlice from "../store/shop/product/index.js"
import searchSlice from "../store/shop/search/index.js"
export const store = configureStore({
  reducer: {
    auth:authReducer,
    adminProducts:productReducer,
    // shoppingCart: shopCartSlice,
    shoppingCart: shopCartSlice,
    address:addressSlice,
    shopOrder:shopOrderSlice,
    adminOrder:adminOrderSlice,
    productReview:productReviewSlice,
    filteredProducts:filterProductSlice,
    search:searchSlice,



    
  },
})