import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  getPodcasts,
  isLoadingPodcasts,
  podcasts,
} from '../../store/reducers/podcastSlice';
import useGetFilteredPodcasts from '../../hooks/useGetFilteredPodcasts';

const usePodcastList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const podcastsList = useSelector(podcasts);
  const isLoading = useSelector(isLoadingPodcasts);
  const [filter, setFilter] = useState<string>('');
  const { filteredPodcast } = useGetFilteredPodcasts({
    filter,
    podcastsList,
  });

  useEffect(() => {
    dispatch(getPodcasts({}));
  }, [dispatch]);

  const onHandleClick = (podcastId: string) => {
    navigate(`podcast/${podcastId}`);
  };

  const onHandleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  return { filteredPodcast, isLoading, onHandleClick, filter, onHandleFilter };
};

export default usePodcastList;
