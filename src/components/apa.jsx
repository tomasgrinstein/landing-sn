// src/components/apa.jsx
import React from 'react';

const Apa = () => {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-orange-50 py-24 text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Tu traductor de lengua de señas gratuito <span className="text-orange-600">impulsado por IA</span>.
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          SignAI traduce videos de lengua de señas de manera asincrónica, para que las personas sordas puedan comunicarse con el mundo.
        </p>
        <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors duration-300 shadow-lg flex items-center justify-center mx-auto space-x-2">
          <span>Explorar más</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Apa;