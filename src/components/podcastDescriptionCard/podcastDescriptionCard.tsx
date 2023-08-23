import {
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from '@mui/material';
import './podcastDescriptionCard.css';
import { PodcastDetail } from '../../interfaces/podcast';

interface PodcastDescriptionProps {
  podcast: PodcastDetail;
  onHandleCardClick: () => void;
}

function PodcastDescriptionCard(props: PodcastDescriptionProps) {
  const { onHandleCardClick } = props;
  const { imageUrl, title, author, description } = props.podcast;

  return (
    <CardActionArea onClick={onHandleCardClick}>
      <CardMedia
        component="img"
        image={imageUrl}
        alt="imageTitle"
        className="imagePodDetail"
      />

      <CardContent className="contentPodDetail">
        <Divider />
        <div>
          <Typography variant="subtitle1">
            <b>{title}</b>
          </Typography>
          <Typography variant="body1">
            <i>{`by ${author}`}</i>
          </Typography>
        </div>
        <Divider />
        <div>
          <Typography variant="subtitle2">
            <b>Description:</b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <i>{description}</i>
          </Typography>
        </div>
      </CardContent>
    </CardActionArea>
  );
}

export default PodcastDescriptionCard;
