import instance from "@/utils/axiosInstance/axiosInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

interface SignupState {
  name: string;
  email: string;
  password: string;
  loading: boolean;
  error: string | null;
}

const initialState: SignupState = {
  name: "",
  email: "",
  password: "",
  loading: false,
  error: null,
};

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async ({ name, email, password }: { name: string; email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await instance.post("/api/register", {
        name,
        email,
        password,
      });
      toast.success("Successfully Added");
      return response.data;
    } catch (error: any) {
      toast.error(error?.response?.data || "Something went wrong");
      return rejectWithValue(error?.response?.data || "Failed to register");
    }
  }
);

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state) => {
        state.loading = false;
        state.name = "";
        state.email = "";
        state.password = "";
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setName, setEmail, setPassword } = signupSlice.actions;

export default signupSlice.reducer;
