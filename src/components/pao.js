import React, { useState, useRef } from 'react';
import logo from '../img/imagen-gato.jpg'; // Importa la imagen
import audioUrl from '../audio/tiapaola.mp3';
import '../output.css';

const Pao = () => {
  const audioRef = useRef(new Audio(audioUrl));
  const [showAnimation, setShowAnimation] = useState(false);

  const handleButtonClick = () => {
      const audio = audioRef.current;
      if (showAnimation) {
          setShowAnimation(false);
          audio.pause();
      } else {
          setTimeout(() => {
              setShowAnimation(true);
              audio.play();
          }, 1000);
      }
  };

  return (
    <div className="container flex flex-col items-center bg-gradient-to-r from-amber-200 to-pink-500 p-4 min-h-screen">
        <h1 className="text-4xl font-bold text-red-500">¡Feliz San Valentín Paola!</h1>
        <p className="text-lg mt-4">¡Que este día esté lleno de amor, alegría y chocolate!</p>
        <button id="boton-gato" className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-md mt-4 p-4" onClick={handleButtonClick}>
            {showAnimation ? 'Ocultar' : 'Presiona aquí'}
        </button>
        <div id="contenedor-animacion" className="mx-auto w-full max-w-sm p-4">
            {showAnimation && <img id="animacion-gato" className="rounded-md" src={logo} alt="Gato animado" />} {/* Usa la imagen importada */}
        </div>
    </div>
  );
}

export default Pao;
