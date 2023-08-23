import { spawn } from 'redux-saga/effects';
import podcastsSaga from './podcasts';
import episodesSaga from './episode';

function* rootSaga() {
  yield spawn(podcastsSaga);
  yield spawn(episodesSaga);
}

export default rootSaga;
