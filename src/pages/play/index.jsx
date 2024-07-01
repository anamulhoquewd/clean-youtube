import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  Link,
} from "@mui/material";
import { useParams } from "@reach/router";
import { useStoreState } from "easy-peasy";
import YouTube from "react-youtube";

const VideoPlay = () => {
  const { playlistId, videoId } = useParams();

  const playlists = useStoreState((state) => state.playlists);

  const playlist = playlists.data[playlistId];

  return (
    <Stack sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
      <YouTube
        videoId={videoId}
        opts={{
          height: "490",
          width: "872",
        }}
      />

      {/* <Box> */}
        <Box
          sx={{
            height: "84vh",
            overflowX: "hidden",
            overflowY: "scroll",
            boxShadow: "none",
            width: 380,
            position: "fixed",
            right: 0,
          }}
        >
          {playlist.playlistItems.map((item, index) => (
            <Card key={item.contentDetails.videoId} sx={{ mb: 1.5,boxShadow: "none" }}>
              <Link
                href={`${item.contentDetails.videoId}`}
                sx={{ textDecoration: "none", color: "text.primary" }}
              >
                <CardActionArea
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                  // href={`${item.contentDetails.videoId}`}
                >
                  <Typography ml={1}>{index + 1}</Typography>
                  <CardMedia
                    component="img"
                    image={item.thumbnail.url}
                    alt="Video item"
                    sx={{
                      width: 100,
                      height: 70,
                    }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="body2">
                      {item.title.length > 20
                        ? item.title.slice(0, 20) + "..."
                        : item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {playlist.channelTitle}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          ))}
        </Box>
      {/* </Box> */}
    </Stack>
  );
};

export default VideoPlay;
