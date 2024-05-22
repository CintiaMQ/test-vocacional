import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiUsers, FiClipboard, FiSettings, FiBarChart2, FiLogOut } from 'react-icons/fi';
import { AuthContext } from '../context/AuthContext';

const SidebarAdmin = () => {
  const { isAuthenticated, userName, logout } = useContext(AuthContext);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`h-screen bg-gray-800 text-white ${isCollapsed ? 'w-20' : 'w-64'} transition-width duration-300 flex flex-col`}>
      <div className="flex items-center justify-between p-6">
        <h1 className={`text-3xl font-semibold ${isCollapsed ? 'hidden' : 'block'}`}>TECVOC</h1>
        <button onClick={toggleSidebar} className="md:hidden">
          <FiMenu size={24} />
        </button>
      </div>
      <div className="flex items-center justify-center mt-10">
        <img
          src="https://png.pngtree.com/background/20230519/original/pngtree-young-woman-anime-cartoon-drawing-picture-image_2660945.jpg"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        {!isCollapsed && <span className="ml-2">{isAuthenticated ? userName : 'Guest'}</span>}
      </div>
      <nav className="mt-10 flex-grow">
        <Link to="/admin-dashboard/user-management" className="flex items-center py-2 px-6 text-gray-300 hover:bg-gray-700">
          <FiUsers size={isCollapsed ? 35 : 24} />
          {!isCollapsed && <span className="mx-4 font-medium">Gestion de usuarios</span>}
        </Link>
        <Link to="/admin-dashboard/test-results" className="flex items-center py-2 px-6 text-gray-300 hover:bg-gray-700">
          <FiClipboard size={isCollapsed ? 35 : 24} />
          {!isCollapsed && <span className="mx-4 font-medium">Resultados de la prueba</span>}
        </Link>
        <Link to="/admin-dashboard/content-management" className="flex items-center py-2 px-6 text-gray-300 hover:bg-gray-700">
          <FiSettings size={isCollapsed ? 35 : 24} />
          {!isCollapsed && <span className="mx-4 font-medium">Gestion de contenido</span>}
        </Link>
        <Link to="/admin-dashboard/analytics" className="flex items-center py-2 px-6 text-gray-300 hover:bg-gray-700">
          <FiBarChart2 size={isCollapsed ? 35 : 24} />
          {!isCollapsed && <span className="mx-4 font-medium">Analitica</span>}
        </Link>
      </nav>
      <div className="mt-auto mb-4">
        <button onClick={logout} className="flex items-center py-2 px-6 text-gray-300 hover:bg-gray-700 w-full">
          <FiLogOut size={isCollapsed ? 35 : 24} />
          {!isCollapsed && <span className="mx-4 font-medium">Cerrar sesión</span>}
        </button>
      </div>
    </div>
  );
};

export default SidebarAdmin;
