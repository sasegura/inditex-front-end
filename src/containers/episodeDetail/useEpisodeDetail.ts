import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Episode, EpisodeDetail } from '../../interfaces/episode';
import { useParams } from 'react-router-dom';
import {
  episodes,
  getEpisodes,
  hasErrorFetching,
  isLoadingEpisodes,
} from '../../store/reducers/episodeSlice';

const useEpisodeDetail = () => {
  const { podcastId, episodeId } = useParams() as {
    podcastId: string;
    episodeId: string;
  };
  const dispatch = useDispatch();

  const episodesList = useSelector(episodes);
  const isLoading = useSelector(isLoadingEpisodes);
  const hasErrorFetchingEpisode = useSelector(hasErrorFetching);

  const [episode, setEpisode] = useState<EpisodeDetail>({
    trackName: '',
    description: '',
    episodeUrl: '',
  });

  useEffect(() => {
    dispatch(getEpisodes({ podcastId }));
  }, [dispatch, podcastId]);

  useEffect(() => {
    const episodeDetails = episodesList[podcastId]?.results?.find(
      (episode: Episode) => {
        return episode.trackId.toString() === episodeId;
      }
    );

    if (episodeDetails && !isLoading) {
      setEpisode(episodeDetails);
    }
  }, [episodesList, podcastId, isLoading, episodeId]);

  return { isLoading, episode, hasErrorFetchingEpisode };
};
export default useEpisodeDetail;
