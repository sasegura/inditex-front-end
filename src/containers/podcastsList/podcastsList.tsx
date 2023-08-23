import { Grid } from '@mui/material';
import { Podcast } from '../../interfaces/podcast';
import usePodcastList from './usePodcastsList';
import Podcasts from '../../components/podcast/podcasts';
import SkeletonCardList from '../../components/skeletons/skeletonCardList';

function PodcastsList() {
  const { podcastsList, isLoading, onHandleClick } = usePodcastList();

  return (
    <Grid container wrap="wrap">
      {!isLoading
        ? podcastsList.map((podcast: Podcast, index: number) => (
            <Grid key={index} item xs={3} sx={{ py: 5 }}>
              <Podcasts
                key={podcast.id.attributes['im:id']}
                podcast={podcast}
                onHandleClick={() =>
                  onHandleClick(podcast.id.attributes['im:id'])
                }
              />
            </Grid>
          ))
        : Array.from(new Array(12)).map((any, index) => (
            <Grid key={index} item xs={3} sx={{ py: 5 }}>
              <SkeletonCardList />
            </Grid>
          ))}
    </Grid>
  );
}

export default PodcastsList;
