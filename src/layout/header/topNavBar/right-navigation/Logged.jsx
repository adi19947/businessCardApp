import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { useUser } from "../../../../users/providers/UserProvider";
import { Box } from "@mui/material";
import Menu from "../menu/Menu";
import { useMenu } from "../../../../providers/MenuProvider";

const Logged = () => {
  const { user } = useUser();

  const setOpen = useMenu();

  return (
    <>
      <Box
        sx={{
          p: 0,
          marginLeft: 2,
          gap: 2,
          display: { xs: "none", md: "inline-flex" },
          alignItems: "center",
        }}
      >
        {`Hello ${user?.firstName}`}
        <Tooltip title="Open settings">
          <IconButton onClick={() => setOpen(true)}>
            <Avatar alt={user?.alt} src={user?.image} />
          </IconButton>
        </Tooltip>
      </Box>
    </>
  );
};

export default Logged;
