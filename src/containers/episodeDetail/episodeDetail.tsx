import EpisodePlayer from '../../components/episodePlayer/episodePlayer';
import SkeletonEpisodePlayer from '../../components/skeletons/skeletonEpisodePlayer';
import useEpisodeDetail from './useEpisodeDetail';

const EpisodeDetail = () => {
  const { isLoading, episode } = useEpisodeDetail();

  return (
    <>
      {isLoading ? (
        <SkeletonEpisodePlayer />
      ) : (
        <EpisodePlayer episode={episode} />
      )}
    </>
  );
};

export default EpisodeDetail;
