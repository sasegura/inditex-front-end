import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  episodes: {},
  isLoadingEpisodes: true,
  hasErrorFetching: false,
  lastFetchTimestamp: '',
};

export const episodesSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {
    getEpisodes: (state, action) => {
      state.isLoadingEpisodes = true;
    },
    updateEpisodes: (state, action) => {
      state.episodes = action.payload;
      state.hasErrorFetching = false;
      state.isLoadingEpisodes = false;
    },
    errorFetchingEpisodes: (state, action) => {
      state.episodes = [];
      state.isLoadingEpisodes = false;
      state.hasErrorFetching = true;
    },
    restoreLoading: (state, action) => {
      state.isLoadingEpisodes = false;
    },
  },
});

export const episodes = (state) => state.episodes.episodes;
export const isLoadingEpisodes = (state) => state.episodes.isLoadingEpisodes;
export const hasErrorFetching = (state) => state.episodes.hasErrorFetching;
export const lastFetchTimestamp = (state) => state.episodes.lastFetchTimestamp;

export const {
  getEpisodes,
  updateEpisodes,
  errorFetchingEpisodes,
  restoreLoading,
} = episodesSlice.actions;

export default episodesSlice.reducer;
