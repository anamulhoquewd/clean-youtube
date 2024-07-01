import { useStoreActions, useStoreState } from "easy-peasy";
import { useState } from "react";
// import { Link } from "@reach/router";

import {
  ButtonGroup,
  CardActionArea,
  DialogContentText,
  IconButton,
  DialogTitle,
  Tooltip,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  Link,
  Skeleton,
} from "@mui/material";

import {
  FavoriteBorder,
  FavoriteOutlined,
  DeleteSweep,
} from "@mui/icons-material";

const VideoCard = ({ playlist, outsite = false }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const playlists = useStoreActions((actions) => actions.playlists);
  const favorites = useStoreActions((actions) => actions.favorites);
  const recents = useStoreActions((actions) => actions.recents);

  const favorite = useStoreState((states) => states.favorites);

  const loading = useStoreState((states) => states.playlists).isLoading;

  const { playlistThumbnail, playlistTitle, channelTitle, playlistId } =
    playlist;

  const hasFavorite = favorite.items.includes(playlistId);

  return (
    <Card
      sx={{
        maxWidth: 345,
        // width: playlistThumbnail.width,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        boxShadow: "none",
        borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
      }}
    >
      {loading ? (
        <Skeleton
          height={170}
          variant="rounded"
          animation="wave"
          sx={{ mb: 1 }}
        />
      ) : (
        <CardActionArea href={`playlist/${playlistId}/`}>
          <CardMedia
            sx={{
              height: outsite ? 110 : playlistThumbnail.height - 20, // 180
              // width: playlistThumbnail.width, // 320
              width: "100%",
            }}
            image={playlistThumbnail.url}
            title={playlistTitle}
            onClick={() => recents.addItem(playlistId)}
          />
        </CardActionArea>
      )}

      <CardContent sx={{ flexGrow: 1 }}>
        {loading ? (
          <>
            <Skeleton width="80%" height={35} />
            <Skeleton width="50%" height={35} />
          </>
        ) : (
          <Typography gutterBottom variant="body1">
            {outsite
              ? playlistTitle.length > 35
                ? playlistTitle.slice(0, 35) + "..."
                : playlistTitle
              : playlistTitle}
          </Typography>
        )}
        {loading ? (
          <Skeleton width="60%" height={30} sx={{ mt: 2 }} />
        ) : (
          !outsite && (
            <Typography
              sx={{ flexGrow: 1 }}
              variant="body2"
              color="text.secondary"
            >
              {channelTitle}
            </Typography>
          )
        )}
      </CardContent>

      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {loading ? (
          <Skeleton width="50%" height={60} />
        ) : (
          <Link href={`playlist/${playlistId}/`}>
            <Button
              variant="outlined"
              size="small"
              onClick={() => recents.addItem(playlistId)}
            >
              {outsite ? "GO" : "Start Playlist"}
            </Button>
          </Link>
        )}
        <ButtonGroup>
          <Tooltip title={hasFavorite ? "Unfavorite" : "Favorite"}>
            {loading ? (
              <Skeleton width={40} height={40} variant="circular" />
            ) : (
              <IconButton
                aria-label="add to favorites"
                onClick={() => {
                  hasFavorite
                    ? favorites.removeItem(playlistId)
                    : favorites.addItem(playlistId);
                }}
              >
                {hasFavorite ? <FavoriteOutlined /> : <FavoriteBorder />}
              </IconButton>
            )}
          </Tooltip>
          {!outsite && (
            <Tooltip title="Delete">
              {loading ? (
                <Skeleton
                  width={40}
                  height={40}
                  variant="circular"
                  sx={{ mr: 2 }}
                />
              ) : (
                <IconButton aria-label="delete item" onClick={handleClickOpen}>
                  <DeleteSweep />
                </IconButton>
              )}
            </Tooltip>
          )}
        </ButtonGroup>
      </CardActions>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Delete Remainder</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button
            onClick={() => {
              playlists.removeItem(playlistId);
              favorites.removeItem(playlistId);
              recents.removeItem(playlistId);
              handleClickOpen();
              handleClose();
            }}
          >
            yes
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default VideoCard;
