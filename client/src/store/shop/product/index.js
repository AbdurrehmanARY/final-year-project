import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  productList: [],
  page: 1,
   totalPages: 1,
  productDetails: null,
};

export const fetchAllFilteredProducts = createAsyncThunk(
  "/products/fetchAllProducts",
  async ({ filterParams, sortParams,page,limit }) => {
    const query = new URLSearchParams({
      ...filterParams,
      sortBy: sortParams,
      page,   // <-- add page
      limit, // <-- add limit
    });
    const result = await axios.get(
      `http://localhost:5000/api/v1/filter/filter-product?${query}`
    );


    return result?.data;
  }
);

export const fetchProductDetails = createAsyncThunk(
  "/products/fetchProductDetails",
  async (id) => {
    const result = await axios.get(
      `http://localhost:5000/api/shop/products/get/${id}`
    );

    return result?.data;
  }
);

const shoppingProductSlice = createSlice({
  name: "filteredProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllFilteredProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchAllFilteredProducts.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.productList = payload.data;
        state.totalPages = payload.totalPages || 1;
      })
      .addCase(fetchAllFilteredProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.productList = [];
      })
      
  },
});

// export const { setProductDetails } = shoppingProductSlice.actions;

export default shoppingProductSlice.reducer;