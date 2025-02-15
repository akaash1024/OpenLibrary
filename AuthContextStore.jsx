import { createContext, useContext } from "react";

const AuthContext = createContext();

export const AuthProvide = ({ children }) => {
  return <AuthContext value={{}}>{children}</AuthContext>;
};

const useAuth = () => useContext(AuthContext);
