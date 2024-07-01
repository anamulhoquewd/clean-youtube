import { Grid, Box, Typography } from "@mui/material";
import VideoCard from "../../components/video-card";
import { useStoreState } from "easy-peasy";

const Recents = () => {
  const playlists = useStoreState((state) => state.playlists);
  const recents = useStoreState((state) => state.recents);

  const playlist = recents.items.map((item) => playlists.data[item]);
  console.log(playlist)

  return (
    <Box sx={{ display: "flex" }}>
      <Box component="main" sx={{ flexGrow: 1 }}>
        {playlist.length === 0 ? (
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"75vh"}
          >
            <Typography sx={{ textAlign: "center" }} variant="h6">
              There is No Recents.
            </Typography>
          </Box>
        ) : (
          <Grid
            container
            spacing={{ xs: 2 }}
            columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
          >
            {playlist.map((item) => (
              <Grid
                item
                key={item.playlistId}
                xs={6}
                sm={4}
                md={3}
                lg={2}
                xl={2}
              >
                <VideoCard playlist={item} outsite={true} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default Recents;
