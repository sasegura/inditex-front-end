import { Container } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import './App.css';

import PodcastsList from './containers/podcastsList/podcastsList';
import store from './store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Container maxWidth="lg">
          <h2> Podcaster </h2>
          <Routes>
            <Route path="/" element={<PodcastsList />} />
          </Routes>
        </Container>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
