import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiHome, FiList, FiFileText, FiVideo, FiLogOut } from 'react-icons/fi';
import { AuthContext } from '../context/AuthContext';

const Sidebar = () => {
  const { isAuthenticated, userName, logout } = useContext(AuthContext);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`h-screen bg-indigo-600 text-white ${isCollapsed ? 'w-20' : 'w-64'} transition-width duration-300 flex flex-col`}>
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
        <Link to="/inicio" className="flex items-center py-2 px-6 text-gray-300 hover:bg-purple-600 ">
          <FiHome size={isCollapsed ? 35 : 24} />
          {!isCollapsed && <span className="mx-4 font-medium">Inicio</span>}
        </Link>
        <Link to="/test" className="flex items-center py-2 px-6 text-gray-300 hover:bg-purple-600">
          <FiList size={isCollapsed ? 35 : 24} />
          {!isCollapsed && <span className="mx-4 font-medium">Test</span>}
        </Link>
        <Link to="/resultados" className="flex items-center py-2 px-6 text-gray-300 hover:bg-purple-600">
          <FiFileText size={isCollapsed ? 35 : 24} />
          {!isCollapsed && <span className="mx-4 font-medium">Resultados</span>}
        </Link>
        <Link to="/videos" className="flex items-center py-2 px-6 text-gray-300 hover:bg-purple-600">
          <FiVideo size={isCollapsed ? 35 : 24} />
          {!isCollapsed && <span className="mx-4 font-medium">Videos</span>}
        </Link>
      </nav>
      <div className="mt-auto mb-4">
        <button onClick={logout} className="flex items-center py-2 px-6 text-gray-300 hover:bg-purple-600 w-full">
          <FiLogOut size={isCollapsed ? 35 : 24} />
          {!isCollapsed && <span className="mx-4 font-medium">Cerrar sesión</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
