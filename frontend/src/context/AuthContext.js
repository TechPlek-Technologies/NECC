import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null represents the initial loading state
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate an asynchronous check for authentication
    const checkAuthStatus = () => {
      const token = localStorage.getItem("Token");
      if (token) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      // Update the authentication status based on the presence of a token
    };

    checkAuthStatus();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, loading, setLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
