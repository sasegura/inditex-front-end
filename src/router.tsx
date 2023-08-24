import { Route, Routes } from 'react-router-dom';

import PodcastsList from './containers/podcastsList/podcastsList';
import PodcastDetail from './containers/podcastDetail/podcastDetail';
import EpisodeList from './containers/episodeList/episodeList';
import EpisodeDetail from './containers/episodeDetail/episodeDetail';
import usePageLoadFinished from './hooks/usePageLoadFinished';

const Router = () => {
  usePageLoadFinished();

  return (
    <Routes>
      <Route path="/" element={<PodcastsList />} />
      <Route path="/podcast/:podcastId/" element={<PodcastDetail />}>
        <Route path="" element={<EpisodeList />} />
        <Route path="episode/:episodeId" element={<EpisodeDetail />} />
      </Route>
    </Routes>
  );
};
export default Router;
