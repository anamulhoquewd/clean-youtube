import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useStoreState } from "easy-peasy";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CardActionArea, IconButton } from "@mui/material";
import { FavoriteBorder, FavoriteOutlined } from "@mui/icons-material";

export default function VideoCard({ playlist }) {
  const [hasFavorite, setHasFavorite] = useState(false);

  const { playlistThumbnail, playlistTitle, channelTitle } = playlist;

  return (
    <Card sx={{ maxWidth: 345, display: "flex", flexDirection: "column" }}>
      <Link to={`playlist/list?${playlist.playlistId}`}>
        <CardActionArea>
          <CardMedia
            sx={{
              height: playlistThumbnail.height,
              width: playlistThumbnail.width,
            }}
            image={playlistThumbnail.url}
            title={playlistTitle}
          />
        </CardActionArea>
      </Link>

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="body1">
          {playlistTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {channelTitle}
        </Typography>
      </CardContent>

      <CardActions>
        <Link to={`playlist/list?${playlist.playlistId}`}>
          <Button variant="outlined" size="small">
            Start Playlist
          </Button>
        </Link>

        <IconButton aria-label="add to favorites">
          {hasFavorite ? <FavoriteOutlined /> : <FavoriteBorder />}
        </IconButton>
      </CardActions>
    </Card>
  );
}
