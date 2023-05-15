import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('');

  const updateUser = (userData) => {
    setUser(userData.data);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
