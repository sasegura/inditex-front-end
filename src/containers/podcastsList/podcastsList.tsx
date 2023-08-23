import { Grid } from '@mui/material';
import { Podcast } from '../../interfaces/podcast';
import usePodcastList from './usePodcastsList';
import Podcasts from '../../components/podcast/podcasts';
import SkeletonCardList from '../../components/skeletons/skeletonCardList';
import FilterInput from '../../components/filterInput/filterInput';
import FilteredPodcastSize from '../../components/filteredPodcastSize/filteredPodcastSize';

function PodcastsList() {
  const { filteredPodcast, isLoading, onHandleClick, filter, onHandleFilter } =
    usePodcastList();

  return (
    <Grid container wrap="wrap">
      <Grid
        item
        xs={12}
        sx={{ pr: 5, pt: 5, mb: 0 }}
        container
        justifyContent="flex-end"
      >
        <Grid item xs={1}>
          <FilteredPodcastSize size={filteredPodcast?.length || 0} />
        </Grid>
        <Grid item xs={4}>
          <FilterInput value={filter} onChange={onHandleFilter} />
        </Grid>
      </Grid>
      {!isLoading
        ? filteredPodcast.map((podcast: Podcast, index: number) => (
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
