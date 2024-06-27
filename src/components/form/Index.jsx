import { useMemo, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FormHelperText } from "@mui/material";
import { useStoreActions, useStoreState } from "easy-peasy";
import storage from "../../util/storage";

const SESSION_KEY = "MY_SESSION_STORAGE_KEY";

const Form = ({ handleClose, open }) => {
  const [value, setValue] = useState("");

  const playlists = useStoreActions((actions) => actions.playlists);

  // const playlistsState = useStoreState((state) => state.playlists);
  // storage.set(SESSION_KEY, playlistsState.data);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value.startsWith("PL")) {
      // @ID
      playlists.getItem(value);
    } else {
      // @URL
      const id = value
        .split("=")
        .filter((item) => item.startsWith("PL"))
        .toString();
      playlists.getItem(id);
    }

    console.log(value);
    setValue("");
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: handleSubmit,
      }}
    >
      <DialogTitle>Add Playlist</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To Add a new playlist, please insert the palylist id or playlist link.
          make sure the playlist id is currectm. Otherwise won't able to fetch
          the playlist informations.
        </DialogContentText>
        <TextField
          sx={{ mt: 6 }}
          autoFocus
          required
          margin="dense"
          name="addPlaylist"
          label="Enter Playlist ID"
          type="text"
          fullWidth
          onChange={(e) => setValue(e.target.value)}
        />
        <FormHelperText>
          Enter a valid YouTube Playlist ID or Playlist Link.
        </FormHelperText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Add Playlist</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Form;
