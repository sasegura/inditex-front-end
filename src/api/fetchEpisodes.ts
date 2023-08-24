import { API_URL, EPISODE_LIST_URL } from '../utils/constant';

export const fetchEpisodes = async (podcastId: string) => {
  const episodes = await fetch(`
      ${API_URL}${EPISODE_LIST_URL}&id=${podcastId}`).then(async (response) => {
    return response.json();
  });
  return episodes;
};

export const fetchEpisodesAllowCors = async (podcastId: string) => {
  const episodes = await fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `${API_URL}${EPISODE_LIST_URL}&id=${podcastId}`
    )}`
  ).then(async (response) => {
    const data = await response.json();
    return JSON.parse(data?.contents);
  });
  return episodes;
};
