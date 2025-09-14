// src/App.jsx

import React from 'react';
import Header from './components/Header'; // Importa el Header que creaste
import Hero from './components/Hero';     // Importa el Hero que creaste

function App() {
  return (
    <>
      <Header />  {/* Renderiza el componente Header */}
      <Hero />    {/* Renderiza el componente Hero */}
    </>
  );
}

export default App;