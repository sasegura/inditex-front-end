import { call, put, select, takeEvery } from 'redux-saga/effects';
import { fetchPodcast } from '../../api/fetchPodcasts';

import {
  errorFetchingPodcasts,
  getPodcasts,
  lastFetchTimestamp,
  podcasts,
  restoreLoading,
  updatePodcasts,
} from '../reducers/podcastSlice';

export function* getPodcastsList() {
  const podcastsData = yield select(podcasts);
  const lastFetchTimestampsData = yield select(lastFetchTimestamp);

  if (
    !podcastsData ||
    !lastFetchTimestampsData ||
    new Date() - new Date(lastFetchTimestampsData) > 24 * 60 * 60 * 1000
  ) {
    try {
      const rooms = yield call(fetchPodcast);
      yield put(updatePodcasts(rooms));
    } catch (err) {
      console.error(err?.message);
      yield put(errorFetchingPodcasts());
    }
  } else {
    yield put(restoreLoading());
  }
}

export default function* podcastsSaga() {
  yield takeEvery(getPodcasts.type, getPodcastsList);
}
