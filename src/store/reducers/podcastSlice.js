import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  podcasts: [],
  isLoadingPodcasts: true,
  hasErrorFetching: false,
  lastFetchTimestamp: '',
};

export const podcastsSlice = createSlice({
  name: 'podcasts',
  initialState,
  reducers: {
    getPodcasts: (state, action) => {
      state.isLoadingPodcasts = true;
    },
    updatePodcasts: (state, action) => {
      state.podcasts = action.payload.feed.entry;
      state.hasErrorFetching = false;
      state.isLoadingPodcasts = false;
      state.lastFetchTimestamp = new Date();
    },
    errorFetchingPodcasts: (state, action) => {
      state.podcasts = [];
      state.isLoadingPodcasts = false;
      state.hasErrorFetching = true;
    },
    restoreLoading: (state, action) => {
      state.isLoadingPodcasts = false;
    },
  },
});

export const podcasts = (state) => state.podcasts.podcasts;
export const isLoadingPodcasts = (state) => state.podcasts.isLoadingPodcasts;
export const hasErrorFetching = (state) => state.podcasts.hasErrorFetching;
export const lastFetchTimestamp = (state) => state.podcasts.lastFetchTimestamp;

export const {
  getPodcasts,
  updatePodcasts,
  errorFetchingPodcasts,
  restoreLoading,
} = podcastsSlice.actions;

export default podcastsSlice.reducer;
