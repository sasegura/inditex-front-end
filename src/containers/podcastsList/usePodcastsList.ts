import { useEffect } from 'react';
import {
  getPodcasts,
  isLoadingPodcasts,
  podcasts,
} from '../../store/reducers/podcastSlice';
import { useDispatch, useSelector } from 'react-redux';

const usePodcastList = () => {
  const dispatch = useDispatch();
  const podcastsList = useSelector(podcasts);
  const isLoading = useSelector(isLoadingPodcasts);

  useEffect(() => {
    dispatch(getPodcasts({}));
  }, [dispatch]);

  return { podcastsList, isLoading };
};

export default usePodcastList;
