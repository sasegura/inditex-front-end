import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  episodes,
  getEpisodes,
  hasErrorFetching,
  isLoadingEpisodes,
} from '../../store/reducers/episodeSlice';

const useEpisodeList = () => {
  const { podcastId } = useParams() as {
    podcastId: string;
  };

  const dispatch = useDispatch();

  const episodesList = useSelector(episodes);
  const isLoading = useSelector(isLoadingEpisodes);
  const hasErrorFetchingEpisode = useSelector(hasErrorFetching);

  useEffect(() => {
    dispatch(getEpisodes({ podcastId }));
  }, [dispatch, podcastId]);

  const counter = episodesList?.length - 1;

  return { hasErrorFetchingEpisode, counter, isLoading, episodesList };
};
export default useEpisodeList;
