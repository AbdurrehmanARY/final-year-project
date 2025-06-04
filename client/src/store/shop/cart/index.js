import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  isLoading: false,
};

export const addToCart = createAsyncThunk(
  "cart/addToCart",
   async({ userId,productId,quantity }) => {
try{
    console.log(userId,productId,quantity)
    const response = await axios.post(
      "http://localhost:5000/api/v1/shop/add-cart",
      {
        userId,
        productId,
        quantity,
      }
    );
    console.log(response.data)

    return response.data;
}
catch(e){
console.log(e)
}
  }
);

export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async (userId) => {
  try{
console.log(userId)
    const response = await axios.get(
        `http://localhost:5000/api/v1/shop/get-cart/${userId}`
      );
      
//   console.log(response.data)
      return response.data;


  }
  catch(e){
    console.log(e)

  }
  }
);

export const deleteCartItem = createAsyncThunk(
  "cart/deleteCartItem",
  async ({ userId, productId }) => {
    console.log('working')
    console.log('user id in slice',userId)
    console.log('peoduct id in slice',productId)

    const response = await axios.delete(
      `http://localhost:5000/api/v1/shop/delete-cart/${userId}/${productId}`,
    );
console.log(response.data)
return response.data
    // return { success: true, productId };
  }
);

export const updateCartQuantity = createAsyncThunk(
  "cart/updateCartQuantity",
  async ({  userId,id, quantity }) => {
  try{
  // console.log( 'attribute is ', id,quantity)
  const response = await axios.put(
    `http://localhost:5000/api/v1/shop/update-cart/${id}`,
  {
    userId,
    quantity
  }
);
console.log(response.data)
return response.data;

  }
  catch(e){
    console.log(e)
  }
  }
);









const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    // updateItemQuantityLocally: (state, action) => {
    //     const { id, quantity } = action.payload;
    //     const item = state.cartItems.find((item) => item.id === id);
    //     if (item) {
    //       item.quantity = quantity;
    //     }
    //   },


  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCart.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        // state.cartItems = payload?.data;
        const newItem = payload?.data;
const index = state.cartItems.findIndex(item => item.id === newItem.id);
if (index !== -1) {
  state.cartItems[index] = newItem;
} else {
  state.cartItems.push(newItem);
}
      })
      .addCase(addToCart.rejected, (state) => {
        state.isLoading = false;
        state.cartItems = [];
      })
      .addCase(fetchCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCartItems.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.cartItems = payload?.data;

      })
      .addCase(fetchCartItems.rejected, (state) => {
        state.isLoading = false;
        state.cartItems = [];
      })
      .addCase(updateCartQuantity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCartQuantity.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        const updatedItem = payload?.data;
const index = state.cartItems.findIndex(item => item.id === updatedItem.id);
if (index !== -1) {
  state.cartItems[index] = updatedItem;
}

      })
      .addCase(updateCartQuantity.rejected, (state) => {
        state.isLoading = false;
        state.cartItems = [];
      })
      .addCase(deleteCartItem.pending, (state) => {
        state.isLoading = true;
      })
    .addCase(deleteCartItem.fulfilled, (state, { payload }) => {
        state.cartItems = state.cartItems.filter((item) => item.id !== payload.deleteRecord.id);
      })
    
      .addCase(deleteCartItem.rejected, (state) => {
        state.isLoading = false;
        // state.cartItems = [];
      });
  },
});

export default shoppingCartSlice.reducer;