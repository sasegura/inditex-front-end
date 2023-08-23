import { Container, Divider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';

import PodcastsList from './containers/podcastsList/podcastsList';
import store, { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import HeaderSection from './components/headerSection/headerSection';
import PodcastDetail from './containers/podcastDetail/podcastDetail';
import EpisodeList from './containers/episodeList/episodeList';
import EpisodeDetail from './containers/episodeDetail/episodeDetail';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Container maxWidth="lg">
            <HeaderSection />
            <Routes>
              <Route path="/" element={<PodcastsList />} />
              <Route path="/podcast/:podcastId/" element={<PodcastDetail />}>
                <Route path="" element={<EpisodeList />} />
                <Route path="episode/:episodeId" element={<EpisodeDetail />} />
              </Route>
            </Routes>
          </Container>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
