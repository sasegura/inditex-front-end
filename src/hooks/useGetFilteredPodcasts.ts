import { useState, useEffect } from 'react';
import { Podcast } from '../interfaces/podcast';

interface PodcastsHook {
  podcastsList: Podcast[];
  filter: string;
}

const useGetFilteredPodcasts = ({ podcastsList, filter }: PodcastsHook) => {
  const [filteredPodcast, setFilteredPodcast] = useState<Podcast[]>([]);

  useEffect(() => {
    const filtered = podcastsList.filter(
      (podcast: Podcast) =>
        podcast?.title?.label
          ?.toLowerCase()
          .includes(filter.toString().toLowerCase()) ||
        podcast['im:artist']?.label
          ?.toLowerCase()
          .includes(filter.toString().toLowerCase())
    );

    setFilteredPodcast(filtered);
  }, [filter, podcastsList]);

  return { filteredPodcast };
};
export default useGetFilteredPodcasts;
