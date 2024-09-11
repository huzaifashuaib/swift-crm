import { PRODUCT, PRODUCT_INITALSTATE } from "@/types/types";
import instance from "@/utils/axiosInstance/axiosInstance";
import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

const initialState: PRODUCT_INITALSTATE = {
  product: [],
  cart: [],
  error: null,
  loading: false,
};

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (formData: PRODUCT, { rejectWithValue }) => {
    try {
      const response = await instance.post("/addProduct", {
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
      const response = await instance.get("/getAllProduct");
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
      const response = await instance.delete("/deleteProduct", {
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
      const response = await instance.post("/editProduct", {
        id,
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
      const response = await instance.post("/editProduct", formData);
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
  reducers: {
    addToCart: (state, action) => {
      const productId = action.payload;
      const currentState = current(state);
      const productToAddIndex = currentState.product.findIndex(
        (product) => product.id === productId
      );
      if (productToAddIndex !== -1) {
        const productToAdd = currentState.product[productToAddIndex];
        if (productToAdd.quantity > 0) {
          const updatedProduct = {
            ...productToAdd,
            quantity: productToAdd.quantity - 1,
          };
          state.product[productToAddIndex] = updatedProduct;

          const productInCart = state.cart.find(
            (product) => product.id === productId
          );
          if (productInCart) {
            productInCart.quantity += 1;
          } else {
            state.cart.push({ ...updatedProduct, quantity: 1 });
          }
        } 
      }
    },

    removeCartProduct: (state, action) => {
      const productId = action.payload;
      const currentState = current(state);
      const productInCartIndex = currentState.cart.findIndex(
        (product) => product.id === productId
      );

      if (productInCartIndex !== -1) {
        const productInCart = state.cart[productInCartIndex];

        if (productInCart.quantity > 1) {
          state.cart[productInCartIndex].quantity -= 1;
        } else {
          state.cart.splice(productInCartIndex, 1);
        }

        const productInInventoryIndex = currentState.product.findIndex(
          (product) => product.id === productId
        );

        if (productInInventoryIndex !== -1) {
          state.product[productInInventoryIndex].quantity += 1;
        } 
      }
    },
 
    clearCart:(state)=>{
      state.cart=[]
    }
  },
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
export const { addToCart, removeCartProduct,clearCart } = productSlice.actions;
export default productSlice.reducer;
