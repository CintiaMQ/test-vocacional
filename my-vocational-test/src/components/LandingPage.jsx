import React from 'react';
import { Link } from 'react-router-dom';
import imagen2 from '../assets/imagen2.png'
import imagen3 from '../assets/imagen3.png'
import regstro from '../assets/regstro.png'
import chico from '../assets/chico.png'
const LandingPage = () => (
  <div className="min-h-screen bg-gray-100 flex flex-col">
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="text-lg font-bold text-blue-400">TECVOC</div>
      <nav className="flex space-x-9">
        <a href="#" className="text-gray-600 hover:text-blue-600">INICIO</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">¿QUÉ ES?</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">INSTRUCCIONES</a>
        <Link to="/login" className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-blue-700">Iniciar sesión</Link>
      </nav>
    </header>
    <main className="flex flex-col-reverse lg:flex-row items-center justify-between flex-grow p-8">
      <div className="lg:w-1/2 space-y-6">
        <h1 className="text-4xl font-extrabold text-indigo-500">TEST VOCACIONAL</h1>
        <p className="text-gray-700">
          ¡Descubre tu destino profesional con la magia de la inteligencia artificial! ¡Desafía las fronteras y sumérgete en un viaje de autoconocimiento! Deja que la tecnología te guíe hacia la carrera de tus sueños. ¡Es momento de explorar y elegir tu camino con confianza!
        </p>
        <br></br>
        <Link to="/register" className="px-6 py-3 bg-indigo-500 text-white rounded-md hover:bg-blue-700">
          Empezar
        </Link>
      </div>
      <div className="lg:w-1/2">
        <img src="https://d2wu8443505y4l.cloudfront.net/img/static/landing_edumatch/img/feature2.webp" alt="Illustration" className="w-full h-auto rounded-md " />
      </div>
    </main>
    <section className="bg-white py-10">
      <div className="container mx-auto px-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Pasos para realizar el test</h2>
        <p className="text-gray-700">Te guiamos paso a paso para completar tu test vocacional con éxito.</p>
        <div className="flex flex-wrap justify-center mt-8">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="w-20 h-15 mx-auto mb-7">
                <img src={regstro} alt="Idea" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Registrarse</h3>
              <p className="text-gray-600">Crea tu cuenta para acceder al test vocacional.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="w-20 h-12 mx-auto mb-4">
                <img src={imagen2} alt="Discussion" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Responder el test vocacional</h3>
              <p className="text-gray-600">Completa el test para descubrir tus intereses y habilidades.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 mx-auto mb-4">
                <img src={chico} alt="Research" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Obtén tus resultados</h3>
              <p className="text-gray-600">Recibe una evaluación detallada y recomendaciones de carrera.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-gray-60 py-8">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl font-extrabold text-gray-900">Objetivos del Test</h2>
          <p className="text-gray-700">
            Nuestro test vocacional tiene como objetivo ayudarte a descubrir tus intereses y habilidades para que puedas tomar decisiones informadas sobre tu carrera profesional.
          </p>
          <br></br>
          <Link to="/register" className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-blue-700">
            Empieza Ahora
          </Link>
        </div>
        <br></br>
        <div className="lg:w-1/2">
          <img src={imagen2} alt="Objetivos del Test" className="w-full h-auto rounded-md " />
        </div>
      </div>
    </section>
    <section className="bg-white py-8">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2">
          <img src="https://i.pinimg.com/564x/48/0c/b0/480cb009f12cb42fdd99b210562f2cdd.jpg" alt="Metodología" className="w-full h-auto rounded-md " />
        </div>
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl font-extrabold text-gray-900">Metodología</h2>
          <p className="text-gray-700">
            Utilizamos inteligencia artificial y algoritmos avanzados para analizar tus respuestas y proporcionar recomendaciones personalizadas basadas en tus intereses y habilidades.
          </p>
        </div>
      </div>
    </section>
    <section className="bg-gray-80 py-8">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl font-extrabold text-gray-900">Beneficios</h2>
          <p className="text-gray-700">
            Al realizar nuestro test vocacional, obtendrás una mejor comprensión de tus fortalezas y áreas de interés, lo que te ayudará a tomar decisiones informadas sobre tu futuro académico y profesional.
          </p>
          <br></br>
          <Link to="/register" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Conoce más
          </Link>
        </div>
        <br></br>
        <div className="lg:w-1/2">
          <img src={imagen3} alt="Beneficios" className="w-full h-auto rounded-md " />
        </div>
      </div>
    </section>
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 TECVOC. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
);

export default LandingPage;
