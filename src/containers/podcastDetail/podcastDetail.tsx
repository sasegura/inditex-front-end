import { Card, Grid } from '@mui/material';
import PodcastDescriptionCard from '../../components/podcastDescriptionCard/podcastDescriptionCard';
import { Outlet } from 'react-router-dom';
import usePodcastDetail from './usePodcastDetail';
import SkeletonPodcastDetail from '../../components/skeletons/skeletonPodcastDetail';

const PodcastDetail = () => {
  const { podcast, isLoading, onHandleCardClick } = usePodcastDetail();

  return (
    <Grid container py="30px" px="10px">
      <Grid item xs={3}>
        <Card sx={{ maxWidth: 345 }}>
          {!isLoading ? (
            <PodcastDescriptionCard
              podcast={podcast}
              onHandleCardClick={onHandleCardClick}
            />
          ) : (
            <SkeletonPodcastDetail />
          )}
        </Card>
      </Grid>
      <Grid item xs={9} pl="80px" container rowSpacing={1}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default PodcastDetail;
