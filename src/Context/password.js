'use client'
import { createContext, useState, useEffect, useContext } from 'react';

export const AuthContext = createContext({
  auth: false,
  setAuth: () => {}
});

const getInitialAuth = () => {
  if (typeof window !== 'undefined') {
    const auth = localStorage.getItem('auth');
    return auth ? JSON.parse(auth) : false; // JSON.parse will convert 'true'/'false' to boolean true/false
  }
  return false;
};



export const AuthProvider = ({ children }) => {
  // Initializing state only when in a browser environment
  const [auth, setAuth] = useState(() => typeof window !== 'undefined' ? getInitialAuth() : false);

  useEffect(() => {
    // Don't run this effect server-side, as localStorage isn't available there
    if (typeof window !== 'undefined') {
      const initialAuth = getInitialAuth();
      setAuth(initialAuth);
    }
  }, []);
  
  useEffect(() => {
    // Don't run this effect server-side, as localStorage isn't available there
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth', JSON.stringify(auth));
    }
  }, [auth]);

  function setAuthHandler(){
    setAuth(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth', 'true');
    }
  }

  return <AuthContext.Provider value={{auth, setAuthHandler}}>{children}</AuthContext.Provider>;
};



export const useGlobalAuthContext = () => useContext(AuthContext);