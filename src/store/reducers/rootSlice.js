import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoadingPage: true,
};

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    finishingLoadingPage: (state, action) => {
      state.isLoadingPage = false;
    },
    restoreLoading: (state, action) => {
      state.isLoadingPage = true;
    },
  },
});

export const isLoadingPage = (state) => state.general.isLoadingPage;

export const { finishingLoadingPage, restoreLoading } = generalSlice.actions;

export default generalSlice.reducer;
