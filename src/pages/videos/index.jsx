import { Link, useParams } from "@reach/router";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useStoreState } from "easy-peasy";
import { Box, CardActionArea, Divider, Stack } from "@mui/material";

const Videos = () => {
  const { playlistId } = useParams();

  const playlists = useStoreState((state) => state.playlists);

  const playlist = playlists.data[playlistId];

  return (
    <Stack sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
      <Box
        sx={{
          background: "linear-gradient(to bottom, #2a0002 0%, #01000b 100%)",
          width: 450,
          p: 3,
          position: "fixed",
          borderRadius: 3,
        }}
      >
        <Card
          sx={{
            background:
              "linear-gradient(180deg, rgba(42,0,2,1) 0%, rgba(255,238,238,0) 100%)",
            maxWidth: 400,
            height: "84vh",
            overflowX: "hidden",
            overflowY: "scroll",
            boxShadow: "none",
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="220"
            image={playlist.playlistThumbnail.url}
          />
          <CardContent>
            <Typography
              sx={{ color: "#fff" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {playlist.playlistTitle}
            </Typography>
            <Typography
              sx={{ color: "rgba(255, 255, 255, 0.77)" }}
              variant="body2"
              py={2}
              color="text.secondary"
            >
              {playlist.channelTitle}
            </Typography>
            <Typography
              sx={{ color: "rgba(255, 255, 255, 0.7)" }}
              variant="body2"
              color="text.secondary"
            >
              {playlist.playlistDescription}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Box sx={{ pl: 60 }}>
        {playlist.playlistItems.map((item, index) => (
          <Card
            key={item.contentDetails.videoId}
            sx={{ mb: 1.5, boxShadow: "none" }}
          >
            <Link
              to={`wacth/${item.contentDetails.videoId}`}
              style={{ textDecoration: "none" }}
            >
              <CardActionArea
                sx={{
                  display: "flex",
                  gap: 3,
                  justifyContent: "start",
                  alignItems: "center",
                }}
                // href={`/wacth/${item.contentDetails.videoId}`}
              >
                <Typography ml={2} color="text.primary">
                  {index + 1}
                </Typography>
                <CardMedia
                  component="img"
                  image={item.thumbnail.url}
                  alt="Video item"
                  sx={{
                    width: item.thumbnail.width,
                    height: item.thumbnail.height,
                  }}
                />
                <CardContent>
                  <Typography gutterBottom color="text.primary">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {playlist.channelTitle}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        ))}
        <Divider />
      </Box>
    </Stack>
  );
};

export default Videos;
