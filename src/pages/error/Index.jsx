import { Box, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Box pt={10} textAlign={"center"}>
      <Typography pb={5} variant="h3">
        Oops!
      </Typography>

      <Typography sx={{}} variant="h6">
        Sorry, 404 Contents not found!
      </Typography>
    </Box>
  );
};

export default NotFound;
