import { call, put, takeEvery } from 'redux-saga/effects';

import { fetchEpisodes } from '../../api/fetchEpisodes';
import {
  errorFetchingEpisodes,
  getEpisodes,
  updateEpisodes,
} from '../reducers/episodeSlice';

export function* getEpisodesList({ payload }) {
  try {
    const rooms = yield call(() => fetchEpisodes(payload.podcastId));
    yield put(updateEpisodes(rooms));
  } catch (err) {
    console.error(err?.message);
    yield put(errorFetchingEpisodes());
  }
}

export default function* episodesSaga() {
  yield takeEvery(getEpisodes.type, getEpisodesList);
}
