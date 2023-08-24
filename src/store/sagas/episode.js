import { call, put, select, takeEvery } from 'redux-saga/effects';

import { fetchEpisodes } from '../../api/fetchEpisodes';
import {
  episodes,
  errorFetchingEpisodes,
  getEpisodes,
  lastFetchTimestamp,
  restoreLoading,
  updateEpisodes,
} from '../reducers/episodeSlice';

export function* getEpisodesList({ payload }) {
  const episodesData = yield select(episodes);
  const lastFetchTimestampsData = yield select(lastFetchTimestamp);
  if (
    !episodesData ||
    !lastFetchTimestampsData ||
    new Date() - new Date(lastFetchTimestampsData) > 24 * 60 * 60 * 1000
  ) {
    try {
      const rooms = yield call(() => fetchEpisodes(payload.podcastId));
      yield put(updateEpisodes(rooms));
    } catch (err) {
      console.error(err?.message);
      yield put(errorFetchingEpisodes());
    }
  } else {
    yield put(restoreLoading());
  }
}

export default function* episodesSaga() {
  yield takeEvery(getEpisodes.type, getEpisodesList);
}
