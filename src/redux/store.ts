import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import authReducer from "@/redux/slices/authSlice"
import userReducer from "@/redux/slices/userSlice"
import productReducer from "@/redux/slices/productSlice"

export const store = configureStore({
  reducer: {
    auth:authReducer,
    user:userReducer,
    product:productReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
