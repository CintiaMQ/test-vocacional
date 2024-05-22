import React, { useContext } from 'react';

import { AuthContext } from '../context/AuthContext'; // Importa el contexto de autenticación
import { Outlet } from 'react-router-dom';
import SidebarAdmin from './Dashboard';

const AdminDashboard = () => {
  const { userName } = useContext(AuthContext); // Usa el contexto para obtener el userName

  return (
    <div className="flex flex-col md:flex-row">
      <SidebarAdmin />
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
              <h2 className="text-2xl font-semibold mb-4">Gestion usuarios</h2>
              <p>Administre usuarios registrados, asigne roles y supervise la actividad</p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">Ver Usuarios</button>
            </section>
            <section className="bg-gray-800 p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-4">Resultados de la prueba</h2>
              <p>Revisar y analizar los resultados de las pruebas enviados por los usuarios..</p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">Ver resultados</button>
            </section>
            <section className="bg-gray-800 p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-4">Gestion de contenido</h2>
              <p>Gestionar el contenido de las pruebas vocacionales y materiales relacionados.</p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">Administrar contenido</button>
            </section>
            <section className="bg-gray-800 p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
              <p>View analytics and insights from the test data.</p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">View Analytics</button>
            </section>
          </div>
          <Outlet /> {/* Para renderizar componentes adicionales */}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
