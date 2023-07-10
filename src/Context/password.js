'use client'
import { createContext, useState, useEffect, useContext } from 'react';

export const AuthContext = createContext({
  auth: false,
  setAuth: () => {}
});

const getInitialAuth = () => {
  const auth = localStorage.getItem('auth');
  return auth ? JSON.parse(auth) : false;
};




export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(getInitialAuth);

  useEffect(() => {
    const initialAuth = getInitialAuth();
    setAuth(initialAuth);
  }, []);
  
  useEffect(() => {
    localStorage.setItem('auth', auth);
  }, [auth]);

  function setAuthHandler(){
    setAuth(true);
    localStorage.setItem('auth', true);
    //save in local storage here
  }

  return <AuthContext.Provider value={{auth, setAuthHandler}}>{children}</AuthContext.Provider>;
};



export const useGlobalAuthContext = () => useContext(AuthContext);