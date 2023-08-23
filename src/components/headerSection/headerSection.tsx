import { Divider, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

function HeaderSection() {
  return (
    <>
      <Grid container>
        <Grid item xs={11}>
          <Link to="/">
            <h2> Podcaster </h2>
          </Link>
        </Grid>
      </Grid>
      <Divider />
    </>
  );
}

export default HeaderSection;
