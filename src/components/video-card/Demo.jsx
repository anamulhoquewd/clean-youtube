import { useState } from "react";
import { Box, Typography } from "@mui/material";

import Form from "../form";

const DemoCard = () => {
  const [openForm, setFormOpen] = useState(false);
  const handleClickOpen = () => {
    setFormOpen(true);
  };
  const handleClickClose = () => {
    setFormOpen(false);
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"75vh"}
    >
      <Typography sx={{ textAlign: "center" }} variant="h6">
        There is No playlists
        <Typography
          sx={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={handleClickOpen}
          variant="h6"
        >
          Create one.
        </Typography>
      </Typography>

      <Form open={openForm} handleClose={handleClickClose} />
    </Box>
  );
};

export default DemoCard;
