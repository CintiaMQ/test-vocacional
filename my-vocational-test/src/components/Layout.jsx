// src/components/Layout.jsx
import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen bg-gray-900 text-white p-4 ml-64">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
