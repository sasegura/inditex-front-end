import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchPodcast } from '../../api/fetchPodcasts';

import {
  errorFetchingPodcasts,
  getPodcasts,
  updatePodcasts,
} from '../reducers/podcastSlice';

export function* getPodcastsList() {
  try {
    const rooms = yield call(fetchPodcast);
    yield put(updatePodcasts(rooms));
  } catch (err) {
    console.error(err?.message);
    yield put(errorFetchingPodcasts());
  }
}

export default function* podcastsSaga() {
  yield takeEvery(getPodcasts.type, getPodcastsList);
}
