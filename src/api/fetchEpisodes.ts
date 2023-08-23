import { API_URL, EPISODE_LIST_URL } from '../utils/constant';

export const fetchEpisodes = async (podcastId: string) => {
  const episodes = await fetch(`
      ${API_URL}${EPISODE_LIST_URL}&id=${podcastId}`)
    .then(async (response) => {
      return response.json();
    })
    .catch((error) => {
      console.error(error);
    });
  return episodes;
};
