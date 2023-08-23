import { Grid } from '@mui/material';
import { Podcast } from '../../interfaces/podcast';
import usePodcastList from './usePodcastsList';

function PodcastsList() {
  const { podcasts, isLoading } = usePodcastList();

  return (
    <Grid container wrap="wrap">
      {(isLoading ? Array.from(new Array(12)) : podcasts).map(
        (podcast: Podcast, index: number) => (
          <Grid key={index} item xs={3} sx={{ py: 5 }}>
            {podcast.title.label}
          </Grid>
        )
      )}
    </Grid>
  );
}

export default PodcastsList;
