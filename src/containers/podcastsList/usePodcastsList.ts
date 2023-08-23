import { useState } from 'react';
import { Podcast } from '../../interfaces/podcast';

const usePodcastList = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  return { podcasts, isLoading };
};

export default usePodcastList;
