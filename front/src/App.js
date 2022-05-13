/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable prettier/prettier */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lister from './Pages/Lister';
import Accueil from './Pages/Accueil';
import Inscription from './Pages/Inscription';
import Connexion from './Pages/connexion';
import Deconnexion from './Pages/deconnexion';
import { AuthContextProvider } from './contex/AuthContex.js';

const App = () => (
  <AuthContextProvider>
    <Router>
      <Routes>
        <Route exact path="/" element={<Accueil />} />
        <Route exact path="/Inscription" element={<Inscription />} />
        <Route exact path="/connexion" element={<Connexion />} />
        <Route exact path="/Lister" element={<Lister />} />
        <Route exact path="/deconnexion" element={<Deconnexion />} />
      </Routes>
    </Router>
  </AuthContextProvider>
);

export default App;
