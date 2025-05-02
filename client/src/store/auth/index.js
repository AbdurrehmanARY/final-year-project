import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"
const initialState = {
isAuthenticated:false,
isLoading:false,
user:null
}


// register user
export const registerUser = createAsyncThunk(
  "/auth/register",async (formData) => {
   

    const response = await axios.post(
      "http://localhost:3000/api/v1/auth/register",
      formData,
      {
        withCredentials: true,
      }
    );
    return response.data;
  }
);




// login user 
export const loginUser = createAsyncThunk(
  "/auth/login",

  async (formData) => {
    const response = await axios.post(
      "http://localhost:3000/api/v1/auth/login",
      formData,
      {
        withCredentials: true,
      }
    );

    return response.data;
  }
);




export const myProfile = createAsyncThunk(
  "/auth/my-profile",

  async () => {
    const response = await axios.get(
      "http://localhost:3000/api/v1/auth/my-profile",
     
      {
        withCredentials: true,
      }
    );
console.log(response.data)
    return response.data;
  }
);


export const logoutUser = createAsyncThunk(
  "/auth/logout",

  async () => {
    const response = await axios.post(
      "http://localhost:3000/api/v1/auth/logout",
     
      {
        withCredentials: true,
      }
    );
console.log(response.data)
    return response.data;
  }
);




// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   // reducers: {
//   //   setUser: (state, action) => {},
//   // },
//   extraReducers: (builder) => {
//     builder
//       .addCase(registerUser.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.user = null;
//         state.isAuthenticated = false;
//       })
//       .addCase(registerUser.rejected, (state, action) => {
//         state.isLoading = false;
//         state.user = null;
//         state.isAuthenticated = false;
//       })
//       // .addCase(loginUser.pending, (state) => {
//       //   state.isLoading = true;
//       // })
//       // .addCase(loginUser.fulfilled, (state, action) => {
//       //   console.log(action);

//       //   state.isLoading = false;
//       //   state.user = action.payload.success ? action.payload.user : null;
//       //   state.isAuthenticated = action.payload.success;
//       // })
//       // .addCase(loginUser.rejected, (state, action) => {
//       //   state.isLoading = false;
//       //   state.user = null;
//       //   state.isAuthenticated = false;
//       // })
//       // .addCase(checkAuth.pending, (state) => {
//       //   state.isLoading = true;
//       // })
//       // .addCase(checkAuth.fulfilled, (state, action) => {
//       //   state.isLoading = false;
//       //   state.user = action.payload.success ? action.payload.user : null;
//       //   state.isAuthenticated = action.payload.success;
//       // })
//       // .addCase(checkAuth.rejected, (state, action) => {
//       //   state.isLoading = false;
//       //   state.user = null;
//       //   state.isAuthenticated = false;
//       // })
//       // .addCase(logoutUser.fulfilled, (state, action) => {
//       //   state.isLoading = false;
//       //   state.user = null;
//       //   state.isAuthenticated = false;
//       // });
//   },
// });


const authSlice=createSlice({
  name:"auth",
  initialState,
  extraReducers:(builder)=>{
    builder.addCase(registerUser.fulfilled,(state,action)=>{
      state.isLoading=false
      state.isAuthenticated=false
      state.user=null
    }).
    addCase(registerUser.pending,(state,action)=>{
      state.isLoading=false
    }).
  addCase(registerUser.rejected,(state,action)=>{
      state.isLoading=false
      state.isAuthenticated=false
      state.user=null
    }).
    addCase(loginUser.pending,(state)=>{
      state.isLoading=false
     }).
    addCase(loginUser.fulfilled,(state,{payload})=>{
 state.isLoading=false
 state.isAuthenticated=payload.success
 state.user=payload.success?payload.user:null
}).
addCase(loginUser.rejected,(state)=>{
  state.isLoading=false
  state.isAuthenticated=false
  state.user=null
 }).
 addCase(myProfile.pending,(state)=>{
  state.isLoading=false
 }).
 addCase(myProfile.fulfilled,(state,{payload})=>{
  state.isLoading=false
  state.isAuthenticated=false
  state.user=payload.success?payload.user:null
 }).
 addCase(myProfile.rejected,(state,{payload})=>{
  state.isLoading=false
  state.isAuthenticated=false
  state.user=null
 }).
 addCase(logoutUser.fulfilled,(state,{payload})=>{
  state.isLoading=false
  state.isAuthenticated=false
  state.user=null
 })
    
  }
})
export default authSlice.reducer