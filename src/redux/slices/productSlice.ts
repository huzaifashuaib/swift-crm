import { PRODUCT, PRODUCT_INITALSTATE } from "@/types/types";
import instance from "@/utils/axiosInstance/axiosInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState: PRODUCT_INITALSTATE = {
  product: [],
  error: null,
  loading: false,
};

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (formData: PRODUCT, { rejectWithValue }) => {
    try {
      const response = await instance.post("/product/addProduct", {
        formData,
      });
      return response?.data;
    } catch (error: any) {
      console.log("Error in addProduct:", error);
      const errorMessage = error.response?.data || "Failed to add Product";
      return rejectWithValue(errorMessage);
    }
  }
);

export const getProduct = createAsyncThunk(
  "get/",
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.get("/product/getAllProduct");
      return response?.data;
    } catch (error: any) {
      console.log("Error in addProduct:", error);
      const errorMessage = error.response?.data || "Failed to Get Products";
      return rejectWithValue(errorMessage);
    }
  }
);
export const deleteProduct = createAsyncThunk(
  "get/deleteProduct",
  async ({id}:{id:string}, { rejectWithValue }) => {
    try {
      const response = await instance.delete("/product/deleteProduct",{
        data:{id}
      });
      return response?.data;
    } catch (error: any) {
      console.log("Error in addProduct:", error);
      const errorMessage = error.response?.data || "Failed to Delete Products";
      return rejectWithValue(errorMessage);
    }
  }
);




const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getProduct.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default productSlice.reducer;
