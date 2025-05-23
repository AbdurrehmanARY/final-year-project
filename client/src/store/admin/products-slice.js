import { createSlice,createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    isLoading: false,
    listOfProduct: [],
  };

// add Product Image 
  export const addProductImage = createAsyncThunk(
    "/admin/image",
    async (image) => {
        console.log('image in store',image)
      const response = await axios.post(
        `http://localhost:3000/api/v1/admin/upload`,
        { image }
      );
  console.log( 'res',response)
      return response.data;
    }
  );



// add product 

export const addNewProduct = createAsyncThunk(
  "/product/add",
  async (formData) => {
    // console.log("form data in slice",formData)
    const response = await axios.post(
      `http://localhost:3000/api/v1/admin/add`,
      formData, // Send formData directly
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data= response.data
//  console.log(data)   
return  data
    
  }
);




// delete product 

export const deleteProduct = createAsyncThunk(
  "/product/delete",
  async (id, { rejectWithValue }) => {
    try {
      console.log(id);
      const response = await axios.delete(
        `http://localhost:3000/api/v1/admin/delete/${id}`
      );
      const data = response.data;
      return data;
    } catch (error) {
      console.error("Error deleting product:", error);
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);




// fetch product 
export const getAllProducts = createAsyncThunk(
  "/products/getProduct",
  async () => {
    const result = await axios.get(
      "http://localhost:3000/api/v1/admin/all"
    );
// console.log(result)
    return result.data;
  }
);





  
const AdminProductsSlice = createSlice({


    name: "adminProducts",
    initialState,
    reducers: {},
extraReducers:(builder)=>{
  builder.addCase(getAllProducts.pending,(state)=>{
    state.isLoading=true
  }).addCase(getAllProducts.fulfilled,(state,{payload})=>{
    state.isLoading=false
    state.listOfProduct=payload.data
  }).addCase(getAllProducts.rejected,(state,{paylaod})=>{
state.isLoading=false
state.listOfProduct=paylaod.data
  })
}






    // extraReducers: (builder) => {
    //   builder
    //     .addCase(fetchAllProducts.pending, (state) => {
    //       state.isLoading = true;
    //     })
    //     .addCase(fetchAllProducts.fulfilled, (state, action) => {
    //       state.isLoading = false;
    //       state.productList = action.payload.data;
    //     })
    //     .addCase(fetchAllProducts.rejected, (state, action) => {
    //       state.isLoading = false;
    //       state.productList = [];
    //     });
    // },
  });
  
  export default AdminProductsSlice.reducer;