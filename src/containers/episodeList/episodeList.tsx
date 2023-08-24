import { Card, Container, Grid } from '@mui/material';
import EpisodeCounter from '../../components/episodeCouter/episodeCounter';
import EpisodeTable from '../../components/episodeTable/episodeTable';
import useEpisodeList from './useEpisodeList';

const EpisodeList = () => {
  const { hasErrorFetchingEpisode, counter, isLoading, episodesList } =
    useEpisodeList();

  return (
    <>
      {hasErrorFetchingEpisode ? (
        <Card sx={{ width: '100%', height: '20px', padding: 2 }}>Error</Card>
      ) : (
        <Container>
          <Grid item xs={12} mb="15px">
            <EpisodeCounter counter={counter} isLoading={isLoading} />
          </Grid>
          <Grid item xs={12}>
            <EpisodeTable episodes={episodesList} isLoading={isLoading} />
          </Grid>
        </Container>
      )}
    </>
  );
};

export default EpisodeList;
