import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './amigos/components/Banner';
import DetalleAmigo from './amigos/router/DetalleAmigo';
import Amigos from './amigos/router/Amigos';
import Navbar from './amigos/components/Navbar';

const App = () => {
  const idAmigo1 = 1; // Aquí defines el id_amigo1

  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Amigos idAmigo1={idAmigo1} />} />
          <Route path="/detalle-amigo/:id_amigo1/:id_amigo2" element={<DetalleAmigo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
