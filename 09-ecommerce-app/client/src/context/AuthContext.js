import { useState, createContext, useContext, useEffect } from "react";
import { fetchLogout, fetchMe } from "../api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const me = await fetchMe();
        setLoggedIn(true);
        setUser(me);
      } catch (e) {}
    })();
  }, []);

  const login = async (data, callback) => {
    setUser(data.user);
    setLoggedIn(true);
    localStorage.setItem("access-token", data.accessToken);
    localStorage.setItem("refresh-token", data.refreshToken);
    localStorage.setItem("user", JSON.stringify(data.user));
    callback();
  };
  const logout = async (callback) => {
    setUser(null);
    setLoggedIn(false);
    await fetchLogout();
    localStorage.removeItem("access-token");
    localStorage.removeItem("refresh-token");
    localStorage.removeItem("user");
    callback();
  };

  const values = {
    user,
    loggedIn,
    login,
    logout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
