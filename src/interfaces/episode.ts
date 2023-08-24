export interface Episode {
  trackId: number;
  trackName: string;
  releaseDate: string;
  trackTimeMillis: number;
  description: string;
  wrapperType: string;
}

export interface EpisodeDetail {
  trackName: string;
  description: string;
  episodeUrl: string;
}
