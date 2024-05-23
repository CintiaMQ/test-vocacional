import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        email,
        password,
        name: role === 'user' ? name : undefined,
        surname: role === 'user' ? surname : undefined,
        age: role === 'user' ? age : undefined,
        educationLevel: role === 'user' ? educationLevel : undefined,
        acceptTerms: role === 'user' ? acceptTerms : undefined,
        role,
      });
      console.log('User registered successfully:', response.data);
      localStorage.setItem('token', response.data.token);
      navigate(role === 'admin' ? '/admin-dashboard' : '/user-dashboard');
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Error registering user');
    }
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <img 
            className="w-16 h-16 mx-auto" 
            src="https://via.placeholder.com/150" 
            alt="Logo"
          />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Crear Cuenta</h2>
        </div>
        <form className="space-y-6" onSubmit={handleRegister}>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="given-name"
                  required={role === 'user'}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Nombre"
                />
              </div>
            </div>
            <div className="w-1/2">
              <label htmlFor="surname" className="block text-sm font-medium text-gray-700">
               Apellido
              </label>
              <div className="mt-1">
                <input
                  id="surname"
                  name="surname"
                  type="text"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  autoComplete="family-name"
                  required={role === 'user'}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Apellido"
                />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Email"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Contraseña"
              />
            </div>
          </div>
          {role === 'user' && (
            <>
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                  Edad
                </label>
                <div className="mt-1">
                  <input
                    id="age"
                    name="age"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    autoComplete="age"
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Ingresar edad"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="educationLevel" className="block text-sm font-medium text-gray-700">
                 Nivel de educación
                </label>
                <div className="mt-1">
                  <input
                    id="educationLevel"
                    name="educationLevel"
                    type="text"
                    value={educationLevel}
                    onChange={(e) => setEducationLevel(e.target.value)}
                    autoComplete="education-level"
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Ingresar nivel de educación"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <input
                  id="acceptTerms"
                  name="acceptTerms"
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  required
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label htmlFor="acceptTerms" className="block ml-2 text-sm text-gray-900">
                 Estoy de acuerdo con los <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Términos</a> y la <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Política de privacidad</a>.
                </label>
              </div>
            </>
          )}
          <div>
            <select value={role} onChange={(e) => setRole(e.target.value)} className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option value="user">Usuario</option>
              <option value="admin">Administrador</option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 mt-6 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Registrarse
            </button>
          </div>
          <div className="text-sm text-center">
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={handleLoginRedirect}
            >
              Iniciar sesión
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
