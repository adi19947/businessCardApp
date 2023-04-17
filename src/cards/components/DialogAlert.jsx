import React from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export default function DialogAlert({
  openDialog,
  setOpenDialog,
  handleDelete,
  id,
}) {
  return (
    <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this item?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
        <Button
          onClick={() => handleDelete(id)}
          variant="contained"
          color="error"
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
