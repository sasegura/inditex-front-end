import { Grid } from '@mui/material';
import { Podcast } from '../../interfaces/podcast';
import usePodcastList from './usePodcastsList';

function PodcastsList() {
  const { podcastsList, isLoading } = usePodcastList();

  return (
    <Grid container wrap="wrap">
      {!isLoading
        ? podcastsList.map((podcast: Podcast, index: number) => (
            <Grid key={index} item xs={3} sx={{ py: 5 }}>
              {podcast.title.label}
            </Grid>
          ))
        : 'loading'}
    </Grid>
  );
}

export default PodcastsList;
