import { FORGETPASS, INITALSTATE, RESTPASS, AUTH_USER } from "@/types/types";
import instance from "@/utils/axiosInstance/axiosInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { stat } from "fs";

const initialState: INITALSTATE = {
  user: null,
  loading: false,
  error: null,
};

// Thunk for adding user
export const addUser = createAsyncThunk(
  "auth/addUser",
  async ({ name, email, password }: AUTH_USER, { rejectWithValue }) => {
    try {
      const response = await instance.post("/register", {
        name,
        email,
        password,
      });
      return response?.data; 
    } catch (error: any) {
    const errorMessage = error.response?.data || "Failed to register";
      return rejectWithValue(errorMessage);
    }
  }
);



export const updatePassword=createAsyncThunk(
    "auth/updatePassword", 
    async({newPassword,token}:RESTPASS,{rejectWithValue})=>{
     try {
        const response = await instance.post("/updatepassword", {
            newPassword,
            token,
          });
          return response?.data; 
        
     } catch (error: any) {
        const errorMessage = error.response?.data || "Failed to Update";
          return rejectWithValue(errorMessage);
        }
    }
)

export const forgetPassword=createAsyncThunk(
    "auth/forgetPassword", 
    async({email}:FORGETPASS,{rejectWithValue})=>{
     try {
        const response = await instance.post("/forgetpassword", {
            email
          });
          return response?.data; 
        
     } catch (error: any) {
        const errorMessage = error.response?.data || "Failed to Reset";
          return rejectWithValue(errorMessage);
        }
    }
)
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; 
      })

    //   Forget Password
      .addCase(forgetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(forgetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(forgetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; 
      })
    //   Reset Password
      .addCase(updatePassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; 
      })

  },
});

export default authSlice.reducer;
