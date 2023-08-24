import { call, put, select, takeEvery } from 'redux-saga/effects';

import { fetchEpisodes, fetchEpisodesAllowCors } from '../../api/fetchEpisodes';
import {
  episodes,
  errorFetchingEpisodes,
  getEpisodes,
  restoreLoading,
  updateEpisodes,
} from '../reducers/episodeSlice';

export function* getEpisodesList({ payload }) {
  const { podcastId } = payload;
  const episodesSelector = yield select(episodes);
  const episodesList = episodesSelector[podcastId];
  if (
    !episodesList ||
    !episodesList.lastFetchTimestamp ||
    new Date() - new Date(episodesList.lastFetchTimestamp) > 24 * 60 * 60 * 1000
  ) {
    try {
      const episodesResults = yield call(() =>
        fetchEpisodes(payload.podcastId)
      );
      episodesResults.lastFetchTimestamp = new Date();

      yield put(
        updateEpisodes({
          ...episodesSelector,
          [`${podcastId}`]: episodesResults,
        })
      );
    } catch (err) {
      console.error(err?.message);
      if (err?.message === 'Failed to fetch') {
        console.log('Intentando a través de alloworigin...');
        try {
          const episodesResultsCors = yield call(() =>
            fetchEpisodesAllowCors(payload.podcastId)
          );
          episodesResultsCors.lastFetchTimestamp = new Date();

          yield put(
            updateEpisodes({
              ...episodesSelector,
              [`${podcastId}`]: episodesResultsCors,
            })
          );
        } catch (errorWithCors) {
          console.error(errorWithCors?.message);
          yield put(errorFetchingEpisodes());
        }
      } else {
        yield put(errorFetchingEpisodes());
      }
    }
  } else {
    yield put(restoreLoading());
  }
}

export default function* episodesSaga() {
  yield takeEvery(getEpisodes.type, getEpisodesList);
}
