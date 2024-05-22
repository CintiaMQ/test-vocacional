import React, { useContext } from 'react';
import Sidebar from './Sidebar';
import { AuthContext } from '../context/AuthContext';

const UserDashboard = () => {
  const { userName } = useContext(AuthContext);

  if (!userName) {
    return <div>Loading...</div>; // O cualquier indicador de carga
  }

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1 min-h-screen bg-gray-900 text-white p-4 ml-20 md:ml-0">
        <header className="flex items-center justify-between bg-gray-800 p-4 mb-6 rounded-lg">
          <h1 className="text-2xl font-bold">User Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <img
                src="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <span className="ml-2">{userName}</span>
            </div>
          </div>
        </header>
        <main>
          {/* Tu contenido aquí */}
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
