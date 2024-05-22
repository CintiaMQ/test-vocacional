import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState(''); // Agregado para almacenar el rol del usuario
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log("Token from localStorage:", token); // Debugging log
    if (token) {
      try {
        const decodedToken = jwt_decode(token);
        console.log("Decoded token:", decodedToken); // Debugging log
        setIsAuthenticated(true);
        setUserName(decodedToken.userName);
        setUserRole(decodedToken.role); // Establecer el rol del usuario
      } catch (error) {
        console.error('Error decodificando el token:', error);
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUserName('');
    setUserRole(''); // Limpiar el rol del usuario
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout, userName, userRole }}>
      {children}
    </AuthContext.Provider>
  );
};
