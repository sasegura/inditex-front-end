import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  episodes: [],
  isLoadingEpisodes: true,
  hasErrorFetching: false,
};

export const episodesSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {
    getEpisodes: (state, action) => {
      state.isLoadingEpisodes = true;
    },
    updateEpisodes: (state, action) => {
      state.episodes = action.payload.results;
      state.hasErrorFetching = false;
      state.isLoadingEpisodes = false;
    },
    errorFetchingEpisodes: (state, action) => {
      state.episodes = [];
      state.isLoadingEpisodes = false;
      state.hasErrorFetching = true;
    },
  },
});

export const episodes = (state) => state.episodes.episodes;
export const isLoadingEpisodes = (state) => state.episodes.isLoadingEpisodes;
export const hasErrorFetching = (state) => state.episodes.hasErrorFetching;

export const { getEpisodes, updateEpisodes, errorFetchingEpisodes } =
  episodesSlice.actions;

export default episodesSlice.reducer;
