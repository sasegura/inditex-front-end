import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Podcast, PodcastDetail } from '../../interfaces/podcast';
import { useNavigate, useParams } from 'react-router-dom';
import {
  getPodcasts,
  isLoadingPodcasts,
  podcasts,
} from '../../store/reducers/podcastSlice';

const usePodcastDetail = () => {
  const { podcastId } = useParams() as {
    podcastId: string;
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [podcast, setPodcast] = useState<PodcastDetail>({
    imageUrl: '',
    title: '',
    author: '',
    description: '',
  });

  const podcastList = useSelector(podcasts);
  const isLoading = useSelector(isLoadingPodcasts);

  useEffect(() => {
    dispatch(getPodcasts({}));
  }, [dispatch]);

  useEffect(() => {
    const podcastDetails = podcastList?.find((podcast: Podcast) => {
      return podcast.id.attributes['im:id'] === podcastId;
    });

    if (podcastDetails && !isLoading) {
      setPodcast({
        imageUrl: podcastDetails['im:image'][2].label,
        title: podcastDetails['im:name'].label,
        author: podcastDetails['im:artist'].label,
        description: podcastDetails.summary.label,
      });
    }
  }, [podcastList, isLoading, podcastId]);

  const onHandleCardClick = () => {
    navigate(`/podcast/${podcastId}`);
  };

  return {
    podcast,
    isLoading,
    onHandleCardClick,
  };
};
export default usePodcastDetail;
