import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  reviews: [],
  totalPages: 1,
  page: 1,
};

export const addReview = createAsyncThunk(
  "/order/addReview",
  async (formdata) => {
   try{
     const response = await axios.post(
      `http://localhost:5000/api/v1/review/add-review`,
      formdata
    );
console.log(response.data);

    return response.data;
   }
   catch (error) {
     console.log('error is',error.response?.data);
     return error.response?.data;
   

   }
  }
);
  // return rejectWithValue(error.response?.data?.message || "Something went wrong");

export const getReviews = createAsyncThunk("/order/getReviews", async ({productId,
   page, limit
   }) => {

    try{
      console.log("productId",productId)
      console.log("pages",page)
    console.log("limit",limit)
  const response = await axios.get(
    `http://localhost:5000/api/v1/review/${productId}?page=${page}&limit=${limit}`

  );
  return response.data;
    }
    catch (error) {
      console.log('error is',error.response);
      return error.response;
   

    }
});

const reviewSlice = createSlice({
  name: "productReview",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReviews.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.reviews = payload.data;
           state.totalPages = payload.totalPages || 1;
        state.page = payload.page || 1;
      })
      .addCase(getReviews.rejected, (state) => {
        state.isLoading = false;
        state.reviews = [];
        // state.totalPages = 1;
        // state.page = 1;
      });
  },
});

export default reviewSlice.reducer;