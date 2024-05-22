import React, { useContext } from 'react';
import Sidebar from './Sidebar';
import { AuthContext } from '../context/AuthContext'; // Importa el contexto de autenticación

const AdminDashboard = () => {
  const { userName } = useContext(AuthContext); // Usa el contexto para obtener el userName

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1 min-h-screen bg-gray-900 text-white p-4 ml-20 md:ml-0">
        <header className="flex items-center justify-between bg-gray-800 p-4 mb-6 rounded-lg">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <img
                src="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg" // Reemplaza con la ruta de la imagen de perfil
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <span className="ml-2">{userName}</span> {/* Muestra el nombre de usuario */}
            </div>
          </div>
        </header>
        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="bg-gray-800 p-6 rounded-lg shadow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-center">
                  <h2 className="text-3xl font-semibold">13k</h2>
                  <p className="text-green-500">+15.6%</p>
                  <p className="mt-1 text-gray-400">Ratings</p>
                  <p className="mt-1 text-gray-400">Year of 2024</p>
                </div>
                <img
                  src="path-to-your-image" // Reemplaza con la ruta de la imagen
                  alt="Ratings"
                  className="w-24 h-24"
                />
              </div>
            </section>
            <section className="bg-gray-800 p-6 rounded-lg shadow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-center">
                  <h2 className="text-3xl font-semibold">24.5k</h2>
                  <p className="text-red-500">-20%</p>
                  <p className="mt-1 text-gray-400">Sessions</p>
                  <p className="mt-1 text-gray-400">Last Week</p>
                </div>
                <img
                  src="path-to-your-image" // Reemplaza con la ruta de la imagen
                  alt="Sessions"
                  className="w-24 h-24"
                />
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
