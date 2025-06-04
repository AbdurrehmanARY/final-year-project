import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
//   approvalURL: null,
  isLoading: false,
  orderId: null,
  orderList: [],
  orderDetails: null,
};

export const createNewOrder = createAsyncThunk(
  "/order/createNewOrder",
  async (formData) => {
    const response = await axios.post(
      "http://localhost:5000/api/v1/order/create-order",formData
    
    );
    return response.data;
  }
);

// export const capturePayment = createAsyncThunk(
//   "/order/capturePayment",
//   async ({ paymentId, payerId, orderId }) => {
//     const response = await axios.post(
//       "http://localhost:5000/api/shop/order/capture",
//       {
//         paymentId,
//         payerId,
//         orderId,
//       }
//     );

//     return response.data;
//   }
// );

export const getAllOrdersByUser = createAsyncThunk(
  "/order/getAllOrdersByUserId",
  async (userId) => {
    console.log('working')
    const response = await axios.get(
      `http://localhost:5000/api/v1/order/get-byUser/${userId}`
    );
console.log(response)
    return response.data;
  }
);




export const getOrderDetails = createAsyncThunk(
  "/order/getOrderDetails",
  async ({userId,orderId}) => {
    console.log('user id and order id in slice is',userId,orderId)
    const response = await axios.get(
      `http://localhost:5000/api/v1/order/order-details/${userId}/${orderId}`
    );
    return response.data;
  }
);

export const confirmPayment = createAsyncThunk(
  "/order/confirmPayment",
  async ({paymentId, payerId, orderId }) => {
    console.log('user id and order id in slice is',paymentId, payerId, orderId)
    const response = await axios.post(
      `http://localhost:5000/api/v1/order/confirm-payment`,{
        paymentId,
        payerId,
        orderId,
      }
    );
    return response.data;
  }
);

const shoppingOrderSlice = createSlice({
  name: "shoppingOrderSlice",
  initialState,
  reducers: {
    // resetOrderDetails: (state) => {
    //   state.orderDetails = null;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createNewOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNewOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.approvalURL = action.payload.approvalURL;
        // state.orderId = action.payload.orderId;
        // sessionStorage.setItem(
        //   "currentOrderId",
        //   JSON.stringify(action.payload.orderId)
        // );
      })
      .addCase(createNewOrder.rejected, (state) => {
        state.isLoading = false;
        // state.approvalURL = null;
        // state.orderId = null;
      })
      .addCase(getAllOrdersByUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllOrdersByUser.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.orderList = payload;
      })
      .addCase(getAllOrdersByUser.rejected, (state) => {
        state.isLoading = false;
        state.orderList = [];
      })
      .addCase(getOrderDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrderDetails.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.orderDetails = payload.order;
      }) 
      .addCase(getOrderDetails.rejected, (state) => {
        state.isLoading = false;
        state.orderDetails = null;
      })
      // .addCase( confirmPayment.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase( confirmPayment.fulfilled, (state, {payload}) => {
      //   state.isLoading = false;
      //   state.orderDetails = payload.order;
      // })
      // .addCase( confirmPayment.rejected, (state) => {
      //   state.isLoading=false;
      //   state.orderDetails= null;
      // });
  },
});

// export const { resetOrderDetails } = shoppingOrderSlice.actions;

export default shoppingOrderSlice.reducer;