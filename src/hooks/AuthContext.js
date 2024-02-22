import React, { createContext, useContext, useState } from "react";
import {useLocalStorage} from "./useLocalStorage"



const AuthContext = createContext();



export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children })  => {
  const [user, setUser] = useLocalStorage("user", null);

  const [isAuthenticated, setIsAuthenticated] = useState(false);


  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  };
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  
  };

  
  const authContextValues = {
    user,
    login,
    logout,
    isAuthenticated,
  }
 
  return (
    <AuthContext.Provider value={authContextValues}>
{children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
