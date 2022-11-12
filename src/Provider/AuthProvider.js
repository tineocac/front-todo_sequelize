import { createContext, useContext, useState } from "react";

const authContext = createContext();

const useProvideAuth = () => {
  const [user, setUser] = useState(null);

  const singIn = (name, cb) => {
    console.log(name);
    setUser(name);
    return user;
  };

  const singOut = (cb) => {
    setUser(null);
  };
  return {
    user,
    singIn,
    singOut,
  };
};

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => useContext(authContext);
