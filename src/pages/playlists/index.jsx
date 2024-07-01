import { Grid, Box, } from "@mui/material";
import VideoCard from "../../components/video-card";
import { useStoreState } from "easy-peasy";
import DemoCard from "../../components/video-card/demo";

const Playlists = () => {
  const playlists = useStoreState((state) => state.playlists);

  let playlist;
  if (playlists !== null) playlist = Object.values(playlists.data);

  return (
    <Box sx={{ display: "flex" }}>
      <Box component="main" sx={{ flexGrow: 1 }}>
        {playlist.length === 0 ? (
          <DemoCard />
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
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={2}
              >
                <VideoCard playlist={item} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default Playlists;
