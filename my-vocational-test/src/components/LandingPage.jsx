import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <div>
    <h1>Bienvenidos al Test Vocacional</h1>
    <p>Este test te ayudará a descubrir tus intereses y habilidades para elegir la carrera adecuada.</p>
    <Link to="/register">
      <button>Registrarse</button>
    </Link>
    <Link to="/login">
      <button>Iniciar Sesión</button>
    </Link>
  </div>
);

export default LandingPage;
