import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const authorizationToken = `Bearer ${token}`;

  const api = axios.create({
    baseURL: "http://localhost:3000",
    headers: { "Content-Type": "application/json" },
  });

  let isLoggedIn = !!token;

  const userAuthentication = async () => {
    try {
      setIsLoading(true);

      const data = await api.get("/api/auth/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Userdata", data.data);
      console.log("Akash step 4");
      setUser(data.data);
      console.log("Akash step 5");
    } catch (error) {
      console.error("Error fetching user data", error);
      setUser(null);
      setToken("");
      localStorage.removeItem("token");
    } finally {
      setIsLoading(false);
    }
  };

  const storeTokenInLs = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  // Logout functionality
  const LogoutUser = () => {
    setToken("");
    setUser(null);
    localStorage.removeItem("token");
  };

  // Use effect to refetch data when token changes
  useEffect(() => {
    if (token) {
      userAuthentication();
    }
  }, [token]);
  return (
    <AuthContext.Provider
      value={{ api, storeTokenInLs, isLoggedIn, LogoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
