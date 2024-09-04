import { ORDER_FORMDATA, ORDER_INITALSTATE } from "@/types/types";
import instance from "@/utils/axiosInstance/axiosInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState: ORDER_INITALSTATE = {
  order: [],
  loading: false,
  error: null,
};

export const addOrder = createAsyncThunk(
  "order/addOrder",
  async (orderDetail: ORDER_FORMDATA, { rejectWithValue }) => {
    try {
      const respone = await instance.post("/order", {
        orderDetail,
      });
      return respone?.data;
    } catch (error: any) {
      const errorMessage = error.response?.data || "Failed to Order";
      return rejectWithValue(errorMessage);
    }
  }
);

export const getOrders = createAsyncThunk(
  "get/orders",
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.get("/order/getOrders");
      return response?.data;
    } catch (error: any) {
      console.log("Error in getOrder:", error);
      const errorMessage = error.response?.data || "Failed to Get All Orders";
      return rejectWithValue(errorMessage);
    }
  }
);
export const completeOrder = createAsyncThunk(
  "edit/completeOrder",
  async ({id}:{id:string | undefined}, { rejectWithValue }) => {
    try {
      const response = await instance.put("/order/completeOrder",{
        id
      });
      return response?.data;
    } catch (error: any) {
      console.log("Error in editOrder:", error);
      const errorMessage = error.response?.data || "Failed to Edit Order";
      return rejectWithValue(errorMessage);
    }
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrderdata:(state,action)=>{
     state.order=action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
      })
      .addCase(addOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.order =action.payload; 
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default orderSlice.reducer;

export const {setOrderdata  } = orderSlice.actions;