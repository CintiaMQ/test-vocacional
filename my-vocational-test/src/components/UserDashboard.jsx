import React, { useState, useContext } from 'react';
import Sidebar from './Sidebar';
import { AuthContext } from '../context/AuthContext';

const UserDashboard = () => {
  const { userName } = useContext(AuthContext);
  const [isCollapsed, setIsCollapsed] = useState(false);

  if (!userName) {
    return <div>Loading...</div>; // O cualquier indicador de carga
  }

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      <div className={`flex-1 p-8 bg-gray-100 text-gray-900 transition-all duration-300 ${isCollapsed ? 'ml-20' : 'ml-1'}`}>
        <header className="flex items-center justify-between p-6 bg-indigo-600 text-white rounded-lg shadow-lg mb-8">
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
        <main className="bg-white p-6 rounded-lg shadow-inner flex-grow">
          <section>
            <h2 className="text-xl font-semibold mb-4">Bienvenido, {userName}</h2>
            <p className="mb-6">Aquí tienes un resumen de tu actividad reciente:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-100 p-4 rounded-lg shadow">
                <h3 className="text-lg font-medium">Progreso Reciente</h3>
                {/* Agrega aquí gráficos o barras de progreso */}
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow">
                <h3 className="text-lg font-medium">Últimos Tests</h3>
                {/* Agrega aquí una lista de los últimos tests tomados */}
              </div>
            </div>
          </section>
          <section className="mt-8">
            <h3 className="text-lg font-medium mb-4">Noticias y Anuncios</h3>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              {/* Agrega aquí las noticias y anuncios */}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
