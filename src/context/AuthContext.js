import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({
  isLoggedIn: false,
  token: null,
  login: async token => {},
  logout: async () => {},
});

export const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authToken, setAuthToken] = useState(null);
  useEffect(() => {
    const getTokenFromStorage = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        setIsLoggedIn(true);
        setAuthToken(token);
      }
    };
    getTokenFromStorage();
  }, []);

  const login = async newToken => {
    await AsyncStorage.setItem('token', newToken);
    setIsLoggedIn(true);
    setAuthToken(newToken);
  };

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    setIsLoggedIn(false);
    setAuthToken(null);
  };
  return (
    <AuthContext.Provider value={{isLoggedIn, token: authToken, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
