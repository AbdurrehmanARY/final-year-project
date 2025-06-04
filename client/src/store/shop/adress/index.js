import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  addressList: [],
};

export const addNewAddress = createAsyncThunk(
  "/addresses/addNewAddress",

  async (formData) => {
 
  try{
    const response = await axios.post(
      "http://localhost:5000/api/v1/adress/add-adress",
      formData
    );
    return response.data;

  }
  catch(e){
    console.log(e);
  }
  }
);

export const fetchAllAddresses = createAsyncThunk(
  "/addresses/fetchAllAddresses",
  async (userId) => {
    try{
      const response = await axios.get(
        `http://localhost:5000/api/v1/adress/get-adress/${userId}`
      );
   

      return response.data;

    }
    catch(e){
      console.log(e)
      throw e; // <-- important!
    }
  }
);

export const editAddress = createAsyncThunk(
  "/addresses/editAddress",
  async ({ userId, addressId, formData }) => {
 try{
  console.log(userId, addressId, formData)
  const response = await axios.put(
    `http://localhost:5000/api/v1/adress/update-adress/${userId}/${addressId}`
    ,
    formData
  );
console.log(response.data)
  return response.data;


 }
 catch(e){
console.log(e)
 }
  }
);

export const deleteAddress = createAsyncThunk(
  "/addresses/deleteAddress",
  async ({ userId, addressId }) => {
    const response = await axios.delete(
      `http://localhost:5000/api/v1/adress/delete-adress/${userId}/${addressId}`
      
    );

    return response.data;
  }
);

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addNewAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNewAddress.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addNewAddress.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchAllAddresses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllAddresses.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.addressList = payload.address ;
      })
      .addCase(fetchAllAddresses.rejected, (state) => {
        state.isLoading = false;
        state.addressList = [];
      });
  },
});

export default addressSlice.reducer;