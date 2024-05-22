import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from "./components/Register";
import Login from "./components/Login";
import GoogleLogin from "./components/GoogleLogin";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import LandingPage from './components/LandingPage';
import TestContainer from './containers/TestContainer';
import { AuthProvider } from './context/AuthContext'; // Asegúrate de importar AuthProvider

function AppRoutes() {
  return (
    <Router>
      <AuthProvider> {/* Envuelve el AuthProvider dentro del Router */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/google-login" element={<GoogleLogin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/test" element={<TestContainer />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default AppRoutes;
