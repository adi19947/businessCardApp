import { createContext, useContext, useRef, useState } from "react";

export const UserContext = createContext({});

export const MenuProvider = ({ children }) => {
  const context = useMenuContextProvider();

  const { Provider } = UserContext;
  return <Provider value={context}>{children}</Provider>;
};

export const useMenuContext = () => useContext(UserContext);

export const useMenuContextProvider = () => {
  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };
  return { isOpen, handleToggle, handleClose };
};
