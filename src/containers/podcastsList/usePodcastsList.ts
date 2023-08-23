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

  const onHandleClick = (id: string) => {
    console.log(id);
  };
  return { podcastsList, isLoading, onHandleClick };
};

export default usePodcastList;
