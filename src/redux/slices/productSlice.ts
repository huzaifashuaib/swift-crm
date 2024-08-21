import { PRODUCT, PRODUCT_INITALSTATE } from "@/types/types";
import instance from "@/utils/axiosInstance/axiosInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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

export const getAllProduct = createAsyncThunk(
  "get/getAllproduct",
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.get("/product/getAllProduct");
      return response?.data;
    } catch (error: any) {
      console.log("Error in getProduct:", error);
      const errorMessage = error.response?.data || "Failed to Get All Products";
      return rejectWithValue(errorMessage);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "del/deleteProduct",
  async ({ id }: { id: string }, { rejectWithValue }) => {
    try {
      const response = await instance.delete("/product/deleteProduct", {
        data: { id },
      });
      return response?.data;
    } catch (error: any) {
      const errorMessage = error.response?.data || "Failed to Delete Products";
      return rejectWithValue(errorMessage);
    }
  }
);

export const editProduct = createAsyncThunk(
  "edit/editProduct",
  async ({ id }: { id: string }, { rejectWithValue }) => {
    try {
      const response = await instance.post("/product/editProduct", {
        id ,
      });
      return response?.data;
    } catch (error: any) {
      const errorMessage = error.response?.data || "Failed to Edit Product";
      return rejectWithValue(errorMessage);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "edit/updateProduct",
  async (formData: PRODUCT, { rejectWithValue }) => {
    try {
      const response = await instance.post("/product/editProduct", formData);
      return response?.data;
    } catch (error: any) {
      const errorMessage = error.response?.data || "Failed to Edit Product";
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
      .addCase(getAllProduct.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(editProduct.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(editProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default productSlice.reducer;
