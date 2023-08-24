import ReactAudioPlayer from 'react-audio-player';
import './episodePlayer.css';
import { Card, Divider, Typography } from '@mui/material';

interface EpisodePlayerProps {
  episode: {
    trackName: string;
    description: string;
    episodeUrl: string;
  };
}

const EpisodePlayer = ({ episode }: EpisodePlayerProps) => {
  const { trackName, description, episodeUrl } = episode;
  return (
    <Card sx={{ p: 5, width: '100%' }}>
      <Typography variant="h5" gutterBottom>
        <b>{trackName}</b>
      </Typography>
      <Typography variant="body2" gutterBottom>
        <i>{description}</i>
      </Typography>

      <Divider sx={{ my: 3 }} />
      <ReactAudioPlayer
        src={episodeUrl}
        autoPlay
        controls
        className="audioPlayer"
      />
    </Card>
  );
};

export default EpisodePlayer;
