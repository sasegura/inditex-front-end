import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import podcastsReducer from './reducers/podcastSlice';
import rootSaga from './sagas';
import episodesReducer from './reducers/episodeSlice';
import generalReducer from './reducers/rootSlice';

const sagaMiddleWare = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
};

export const rootReducer = combineReducers({
  general: generalReducer,
  podcasts: podcastsReducer,
  episodes: episodesReducer,
});

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(rootSaga);

export default store;
export const persistor = persistStore(store);
