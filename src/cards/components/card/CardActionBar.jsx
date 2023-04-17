import { Box, CardActions, IconButton } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { func, string } from "prop-types";
import { useUser } from "../../../users/providers/UserProvider";
import DialogAlert from "../DialogAlert";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routs/routesModel";

export default function CardActionBar({
  handleLike,
  id,
  user_id,
  handleDelete,
}) {
  const { user } = useUser();
  const [openDialog, setOpenDialog] = useState(false);

  const navigate = useNavigate();
  return (
    <>
      <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
        <Box>
          {user?.isAdmin || user?.id == user_id ? (
            <>
              <IconButton
                aria-label="Delete Card"
                onClick={() => setOpenDialog(true)}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                aria-label="Edit Card"
                onClick={() => navigate(`${ROUTES.EDIT_CARD}/${id}`)}
              >
                <ModeEditIcon />
              </IconButton>
            </>
          ) : null}
        </Box>

        <Box>
          <IconButton aria-label="Call">
            <CallIcon />
          </IconButton>
          {user && (
            <IconButton
              aria-label="Add to favorite"
              onClick={() => handleLike(id)}
            >
              <FavoriteIcon />
            </IconButton>
          )}
        </Box>
      </CardActions>
      <DialogAlert
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        handleDelete={handleDelete}
        id={id}
      />
    </>
  );
}

CardActionBar.propTypes = {
  handleEdit: func.isRequired,
  handleLike: func.isRequired,
  id: string.isRequired,
};
