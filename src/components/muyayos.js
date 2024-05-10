import React, { useState} from 'react';
import logo from '../img/meme-gato2.jpg'; // Importa la imagen

import '../output.css';

function Muyayos() {

  const [showAnimation, setShowAnimation] = useState(false);

  const handleButtonClick = () => {

      if (showAnimation) {
          setShowAnimation(false);

      } else {
          setTimeout(() => {
              setShowAnimation(true);
            
          }, 1000);
      }
  };

  return (
    <div className="container mx-auto flex flex-col items-center bg-gradient-to-r from-amber-200 from-yellow-200 to-pink-500 p-4 min-h-screen mx-auto">
        <h1 className="text-4xl font-bold text-red-500">¡Feliz San Valentín!</h1>
        <p className="text-lg mt-4">¡Que este día esté lleno de amor, naa mentira de plata puroo money menores!</p>
        <button id="boton-gato" className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-md mt-4 p-4" onClick={handleButtonClick}>
            {showAnimation ? 'Ocultar' : 'Presiona aquí'}
        </button>
        <div id="contenedor-animacion" className="mx-auto w-full max-w-sm p-4">
            {showAnimation && <img id="animacion-gato" className="rounded-md" src={logo} alt="Gato animado" />} {/* Usa la imagen importada */}
        </div>
        {showAnimation &&  <h2 className="text-4xl font-bold text-black">Para: Nico, Angel Natty, Jesus.</h2>}
        
    </div>
  );
}

export default Muyayos;
