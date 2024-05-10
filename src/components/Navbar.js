import React from 'react';
import '../output.css';

const Navbar = () => {
  return (
    <nav id="navbar" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Botón de menú para dispositivos móviles */}

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-8 w-auto" src="https://cdn-icons-png.flaticon.com/512/9850/9850774.png" alt="Logotipo de tu compañía" />
            </div>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a href="#db" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Base de datos</a>
                <a href="#typedb" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Tipos de base de datos</a>
                <a href="#controllersdb" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Manejadores</a>
                <a href="#concepts" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Conceptos</a>
                <a href="#model-e-r" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Modelo E-R</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;