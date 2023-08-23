import { createSlice } from '@reduxjs/toolkit';
import { Podcast } from '../../interfaces/podcast';

const initialState = {
  podcasts: [],
  isLoadingPodcasts: true,
  hasErrorFetching: false,
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
    },
    errorFetchingPodcasts: (state, action) => {
      state.podcasts = [];
      state.isLoadingPodcasts = false;
      state.hasErrorFetching = true;
    },
  },
});

export const podcasts = (state) => state.podcasts.podcasts;
export const isLoadingPodcasts = (state) => state.podcasts.isLoadingPodcasts;
export const hasErrorFetching = (state) => state.podcasts.hasErrorFetching;

export const { getPodcasts, updatePodcasts, errorFetchingPodcasts } =
  podcastsSlice.actions;

export default podcastsSlice.reducer;
