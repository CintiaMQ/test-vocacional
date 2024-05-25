import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Simular el entorno de desarrollo sin token
    const isInDevelopment = process.env.NODE_ENV === 'development';
    if (isInDevelopment) {
      setIsAuthenticated(true);
      setUserName('Usuario de Desarrollo'); // Puedes establecer cualquier nombre que desees
    } else {
      const token = localStorage.getItem('token');
      console.log("Token from localStorage:", token); // Depuración
      if (token) {
        try {
          const decodedToken = jwt_decode(token);
          console.log("Decoded token:", decodedToken); // Depuración
          setIsAuthenticated(true);
          setUserName(decodedToken.userName); // Asegúrate de que el token tenga un campo 'userName'
        } catch (error) {
          console.error('Error decodificando el token:', error);
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUserName('');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout, userName }}>
      {children}
    </AuthContext.Provider>
  );
};
