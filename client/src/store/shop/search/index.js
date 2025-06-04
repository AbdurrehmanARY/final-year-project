
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  searchResults: [],
};

export const getSearchResults = createAsyncThunk(
  "/order/getSearchResults",
  async ({keyword,filterParams, sortParams,page,limit}) => {
    try {
        console.log("keyword", keyword);

        const query = new URLSearchParams({
          keyword,
      ...filterParams,
      sortBy: sortParams,
      page,   // <-- add page
      limit, // <-- add limit
    });
   const response = await axios.get(
      `http://localhost:5000/api/v1/search/search-product?${query}`
    );

    return response.data;

    }
    catch (error) {
      console.error("Error fetching search results:", error);
    //   throw error;
    }
  }
);

const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    // resetSearchResults: (state) => {
    //   state.searchResults = [];
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSearchResults.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSearchResults.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.searchResults = payload.data;
      })
      .addCase(getSearchResults.rejected, (state) => {
        state.isLoading = false;
        state.searchResults = [];
      });
  },
});

// export const { resetSearchResults } = searchSlice.actions;

export default searchSlice.reducer;
