import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import HeaderSection from '../../components/headerSection/headerSection';
import { isLoadingEpisodes } from '../../store/reducers/episodeSlice';
import { isLoadingPodcasts } from '../../store/reducers/podcastSlice';
import { isLoadingPage } from '../../store/reducers/rootSlice';

const Header = () => {
  const [isLoadingHead, setIsLoadingHead] = useState(true);
  const isLoadingEpisodesSelector = useSelector(isLoadingEpisodes);
  const isLoadingPodcastsSelector = useSelector(isLoadingPodcasts);
  const isLoadingPageSelector = useSelector(isLoadingPage);

  useEffect(() => {
    isLoadingPodcastsSelector ||
    isLoadingEpisodesSelector ||
    isLoadingPageSelector
      ? setIsLoadingHead(true)
      : setIsLoadingHead(false);
  }, [isLoadingEpisodesSelector, isLoadingPodcastsSelector]);

  return <HeaderSection isLoading={isLoadingHead} />;
};

export default Header;
