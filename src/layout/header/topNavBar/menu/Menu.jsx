import { Box, Popper } from "@mui/material";
import React, { useState } from "react";
import { useMenuContext } from "../../../../providers/MenuProvider";
import MenuLink from "../../../../routs/components/MenuLink";
import ROUTES from "../../../../routs/routesModel";
import { useUser } from "../../../../users/providers/UserProvider";
import MoreButton from "../right-navigation/MoreButton";
import { useUsers } from "../../../../users/hooks/useUsers";
export default function Menu() {
  const { isOpen, handleClose } = useMenuContext();
  const { user } = useUser();

  return (
    <>
      {isOpen && (
        <Box sx={{ width: "fit-content", bgcolor: "white" }}>
          {user && <MoreButton /> ? (
            <MenuLink
              text="about"
              navigateTo={ROUTES.ABOUT}
              onClick={handleClose}
            />
          ) : null}
          {user && (
            <MenuLink
              text="profile"
              navigateTo={ROUTES.ABOUT}
              onClick={handleClose}
            />
          )}
          {user && (
            <MenuLink
              text="edit account"
              navigateTo={ROUTES.ABOUT}
              onClick={handleClose}
            />
          )}
          {user && (
            <MenuLink
              text="logout"
              navigateTo={ROUTES.ABOUT}
              onClick={handleClose}
            />
          )}

          {!user && (
            <MenuLink
              text="about"
              navigateTo={ROUTES.ABOUT}
              onClick={handleClose}
            />
          )}
          {!user && (
            <MenuLink
              text="login"
              navigateTo={ROUTES.LOGIN}
              onClick={handleClose}
            />
          )}
          {!user && (
            <MenuLink
              text="sign-up"
              navigateTo={ROUTES.SIGN_UP}
              onClick={handleClose}
            />
          )}
        </Box>
      )}
    </>
  );
}
