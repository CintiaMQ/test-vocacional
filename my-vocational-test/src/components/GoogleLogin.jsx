// GoogleLogin.jsx
import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebaseConfig'; // Asegúrate de que la ruta sea correcta

const GoogleLogin = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user.email.endsWith('@tecsup.edu.pe')) {
        navigate('/admin-dashboard');
      } else {
        navigate('/user-dashboard');
      }
    } catch (error) {
      console.error('Error iniciando sesión con Google:', error);
      alert('Error iniciando sesión con Google');
    }
  };

  return (
    <button onClick={handleGoogleLogin}>Iniciar sesión con Google</button>
  );
};

export default GoogleLogin;