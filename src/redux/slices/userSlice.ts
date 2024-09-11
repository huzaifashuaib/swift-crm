import { INITALSTATE, UPDATE_USER_PASS, USER } from "@/types/types";
import instance from "@/utils/axiosInstance/axiosInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState: INITALSTATE = {
  user: null,
  loading: false,
  error: null,
};

export const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async ({ userName, email, imgUrl, publicId }: USER, { rejectWithValue }) => {
    try {
      const respone = await instance.post("/updateProfile", {
        userName,
        email,
        imgUrl,
        publicId,
      });
      return respone?.data;
    } catch (error: any) {
      const errorMessage = error.response?.data || "Failed to Update Profile";
      return rejectWithValue(errorMessage);
    }
  }
);
export const updatePassword = createAsyncThunk(
  "user/updatePassword",
  async ({ password, newPassword }: UPDATE_USER_PASS, { rejectWithValue }) => {
    try {
      const respone = await instance.post("/updatePassword", {
        password,
        newPassword,
      });
      return respone?.data;
    } catch (error: any) {
      const errorMessage = error.response?.data || "Failed to Update Password";
      return rejectWithValue(errorMessage);
    }
  }
);

const User = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Update Password
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
      });
  },
});

export default User.reducer;
