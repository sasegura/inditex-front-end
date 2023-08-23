import { Container } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import PodcastsList from './containers/podcastsList/podcastsList';

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <h2> Podcaster </h2>
        <Routes>
          <Route path="/" element={<PodcastsList />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
