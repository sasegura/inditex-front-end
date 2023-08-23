import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getPodcasts,
  isLoadingPodcasts,
  podcasts,
} from '../../store/reducers/podcastSlice';
import useGetFilteredPodcasts from '../../hooks/useGetFilteredPodcasts';

const usePodcastList = () => {
  const dispatch = useDispatch();
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

  const onHandleClick = (id: string) => {
    console.log(id);
  };

  const onHandleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  return { filteredPodcast, isLoading, onHandleClick, filter, onHandleFilter };
};

export default usePodcastList;
