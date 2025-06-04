import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  isLoading: false,
//   orderId: null,
  orderList: [],
  orderDetails: null,
};


export const getAllOrdersByAdmin = createAsyncThunk(
  "/order/getAllOrdersByAdminId",
  async ({userId}) => {
    console.log('working',userId)
 const response = await axios.get(
      `http://localhost:5000/api/v1/admin-order/get-order-for-admin/${userId}`
    );
console.log(response)
    return response.data;
  }
);



export const getOrderDetailsForAdmin = createAsyncThunk(
  "/order/getOrderDetailsForAdmin",
  async (id) => {
    const response = await axios.get(
      `http://localhost:5000/api/admin/orders/details/${id}`
    );

    return response.data;
  }
);

export const updateOrderStatus = createAsyncThunk(
  "/order/updateOrderStatus",
  async ({ userId,orderId, status }) => {
    console.log(userId,orderId,status)
    const response = await axios.put(
      `http://localhost:5000/api/v1/admin-order/update/${userId}/${orderId}`,
    
      {
        status,
      }
    );

    return response.data;
  }
);

const adminOrderSlice = createSlice({
  name: "adminOrderSlice",
  initialState,
//   reducers: {
//     resetOrderDetails: (state) => {
//       console.log("resetOrderDetails");

//       state.orderDetails = null;
//     },
//   },
  extraReducers: (builder) => {
    builder
      .addCase(getAllOrdersByAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllOrdersByAdmin.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.orderList = payload?.data;
      })
      .addCase(getAllOrdersByAdmin.rejected, (state) => {
        state.isLoading = false;
        state.orderList = [];
      })
    //   .addCase(getOrderDetailsForAdmin.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(getOrderDetailsForAdmin.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.orderDetails = action.payload.data;
    //   })
    //   .addCase(getOrderDetailsForAdmin.rejected, (state) => {
    //     state.isLoading = false;
    //     state.orderDetails = null;
    //   });
  },
});

// export const { resetOrderDetails } = adminOrderSlice.actions;

export default adminOrderSlice.reducer;