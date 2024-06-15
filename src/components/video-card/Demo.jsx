import { Box, Button, Typography } from "@mui/material";
import Form from "../form/Index";
import { useState } from "react";

const DemoCard = () => {
  const [openForm, setFormOpen] = useState(false);
  const handleClickOpen = () => {
    setFormOpen(true);
  };
  const handleClickClose = () => {
    setFormOpen(false);
  };

  return (
    <Box>
      <Typography sx={{ textAlign: "center" }}>
      There is No playlists
        <Typography
          sx={{ color: "palegreen", cursor: "pointer" }}
          onClick={handleClickOpen}
        >
          Create one.
        </Typography>
      </Typography>

      <Form open={openForm} handleClose={handleClickClose} />
    </Box>
  );
};

export default DemoCard;
