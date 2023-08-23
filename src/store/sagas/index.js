import { spawn } from 'redux-saga/effects';
import podcastsSaga from './podcasts';

function* rootSaga() {
  yield spawn(podcastsSaga);
}

export default rootSaga;
