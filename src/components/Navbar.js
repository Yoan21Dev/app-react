import React from 'react';
import '../output.css';

const Navbar = () => {
  return (
    <nav id="navbar" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Botón de menú para dispositivos móviles */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              
              <span className="sr-only">Abrir menú principal</span>
              {/* Icono de hamburguesa (visible en pantallas pequeñas) */}
              
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 18h18v-2H3v-2m0-8h18v-2H3v-2m0-8h18V4H3z" />
              </svg>
              {/* Icono de cerrar (visible en pantallas pequeñas cuando el menú está abierto) */}
              <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Logotipo de tu compañía" />
            </div>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Proyecto</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Habilidades</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Acerca de</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contáctanos</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;