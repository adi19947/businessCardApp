import { useState, useCallback, useMemo } from "react";
import useAxios from "../../hooks/useAxios";
import { login, signup, updateUser } from "../services/usersApiService";
import {
  getUser,
  removeToken,
  removeTokenFromLocalStorage,
  setTokenInLocalStorage,
} from "../services/localStorageService";
import { useUser } from "../providers/UserProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routs/routesModel";
import normalizeUser from "../helpers/normalization/normalizeUser";
import { useSnack } from "../../providers/SnackbarProvider";
import mapUserToModel from "../helpers/normalization/mapUserToModel";
import userBackendToClient from "../helpers/normalization/userBackendToClient";


const useUsers = () => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { user, setUser, setToken } = useUser();
  const snack = useSnack();
  useAxios();

  const requestStatus = useCallback(
    (loading, errorMessage, user = null) => {
      setLoading(loading);
      setUser(user);
      setError(errorMessage);
    },
    [setUser]
  );

  const handleLogin = useCallback(async (user) => {
    try {
      const token = await login(user);
      setTokenInLocalStorage(token);
      setToken(token);
      const userFromLocalStorage = getUser();
      requestStatus(false, null, userFromLocalStorage);
      navigate(ROUTES.CARDS);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleLogout = useCallback(() => {
    removeTokenFromLocalStorage();
    navigate(ROUTES.ROOT);
    setUser(null);
  }, [setUser]);


  const handleSignup = useCallback(
    async (userFromClient) => {
      try {
        const normalizedUser = normalizeUser(userFromClient);
        await signup(normalizedUser);
        await handleLogin({
          email: userFromClient.email,
          password: userFromClient.password,
        });
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [requestStatus, handleLogin]
  );


  const handleUpdateUser = useCallback(async (userId, newUser) => {
    try {
      setLoading(true);
      const user = await updateUser(userId, newUser);
      const modelUser = userBackendToClient(user);
      console.log(modelUser);
      requestStatus(false, null, modelUser);

      snack("success", "The user has been successfully updated");
    } catch (error) {
      requestStatus(false, error, []);
    }
  }, []);



  const value = useMemo(
    () => ({ isLoading, error, user }),
    [isLoading, error, user]
  );

  return {
    value,
    handleLogin,
    handleLogout,
    handleSignup, handleUpdateUser
  };
};

export default useUsers;
