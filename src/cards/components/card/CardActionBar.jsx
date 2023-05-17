import { Box, CardActions, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { func, string } from "prop-types";
import { useUser } from "../../../users/providers/UserProvider";
import DialogAlert from "../DialogAlert";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routs/routesModel";
import { useCardsContext } from "../../../providers/CardsProvider";

export default function CardActionBar({
  id,
  user_id,
  handleDelete,
  cardLikes,
}) {
  const { user } = useUser();

  const { handleLikeCard } = useCardsContext();

  const [isLiked, setLiked] = useState(cardLikes?.includes(user?.id));

  const onLike = async () => {
    setLiked((prev) => !prev);
    await handleLikeCard(id);
  };
  const [openDialog, setOpenDialog] = useState(false);

  const navigate = useNavigate();
  return (
    <>
      <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
        <Box>
          {user?.isAdmin || (user?.isBusiness && user?.id == user_id) ? (
            <IconButton
              aria-label="Delete Card"
              onClick={() => setOpenDialog(true)}
            >
              <DeleteIcon />
            </IconButton>
          ) : null}

          {(user?.isAdmin && user?.id == user_id) ||
          (user?.isBusiness && user?.id == user_id) ? (
            <IconButton
              aria-label="Edit Card"
              onClick={() => navigate(`${ROUTES.EDIT_CARD}/${id}`)}
            >
              <ModeEditIcon />
            </IconButton>
          ) : null}
        </Box>

        <Box>
          <IconButton aria-label="Call">
            <CallIcon />
          </IconButton>
          {user && (
            <IconButton
              aria-label="Add to favorite"
              onClick={onLike}
              sx={{
                color: isLiked ? "red" : "gray",
              }}
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
  handleLike: func,
  id: string.isRequired,
};
