import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DateRangeState {
  startDate: string | null;
  endDate: string | null;
}

const initialState: DateRangeState = {
  startDate: null,
  endDate: null,
};

const dateRangeSlice = createSlice({
  name: 'dateRange',
  initialState,
  reducers: {
    setDateRange(state, action: PayloadAction<{ startDate: string | null; endDate: string | null }>) {
      state.startDate = action.payload.startDate;
      state.endDate = action.payload.endDate;
    },
  },
});

export const { setDateRange } = dateRangeSlice.actions;
export default dateRangeSlice.reducer;
