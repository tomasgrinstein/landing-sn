// src/components/Hero.jsx

import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-100 py-16 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Tu traductor de lengua de señas gratuito impulsado por IA.
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          SignAI es tu aliado para una comunicación inclusiva. Nuestro software usa la inteligencia artificial para traducir la lengua de señas a texto y audio en tiempo real.
        </p>
        <div className="mt-8">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors duration-300">
            Explorar más
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;