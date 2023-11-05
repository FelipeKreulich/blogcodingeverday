import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user") || null));

  const baseURL = "http://localhost:8800/api";

  const login = async (inputs) => {
    const res = await axios.post(`${baseURL}/auth/login`, inputs, {withCredentials: true});
    setCurrentUser(res.data);
  };

  const logout = async () => {
    axios.defaults.withCredentials = true
    await axios.post(`${baseURL}/auth/logout`, {withCredentials: true});
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{currentUser, login, logout}}>{children}</AuthContext.Provider>
  );
};