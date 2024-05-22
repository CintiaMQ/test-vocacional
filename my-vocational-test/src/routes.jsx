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
import Resultados from './components/Resultados';
import Videos from './components/Videos';
import Inicio from './components/Inicio';
import UserManagement from './components/UserManagement'; // Nombre corregido
import TestResults from './components/TestResults';
import ContentManagement from './components/ContentManagement';
import Analytics from './components/Analytics';
import { AuthProvider } from './context/AuthContext'; // Importa el proveedor de contexto

function AppRoutes() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/google-login" element={<GoogleLogin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard/*" element={<AdminDashboard />}>
            <Route path="user-management" element={<UserManagement />} />
            <Route path="test-results" element={<TestResults />} />
            <Route path="content-management" element={<ContentManagement />} />
            <Route path="analytics" element={<Analytics />} />
          </Route>
          <Route path="/user-dashboard/*" element={<UserDashboard />}>
            <Route path="inicio" element={<Inicio />} />
            <Route path="test" element={<TestContainer />} />
            <Route path="resultados" element={<Resultados />} />
            <Route path="videos" element={<Videos />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default AppRoutes;
