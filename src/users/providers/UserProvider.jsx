import { node } from "prop-types";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  getTokenFromLocalStorage,
  getUser,
} from "../services/localStorageService";
import { useSnack } from "../../providers/SnackbarProvider";

const userContext = createContext();
export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(getTokenFromLocalStorage());

  useEffect(() => {
    if (!user) {
      const userFromLocalStorage = getUser();
      setUser(userFromLocalStorage);
    }
  }, [user]);

  const value = useMemo(
    () => ({ user, setUser, token, setToken }),
    [user, token, setUser]
  );

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
}

export const useUser = () => {
  const context = useContext(userContext);
  if (!context) throw new Error("useUser must be used within a NameProvider");
  return context;
};

UserProvider.propTypes = {
  children: node.isRequired,
};
