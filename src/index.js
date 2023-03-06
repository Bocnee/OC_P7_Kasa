// React and React Router components
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Global Styles
import './styles/utils/reset.scss';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Logement from './pages/Logement';

// Variables
const root = document.getElementById('root');

createRoot(root).render(
   <React.StrictMode>
      <BrowserRouter>
         <Header />
         <Routes>
            <Route path="/*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/logement/:id" element={<Logement />} />
         </Routes>
         <Footer />
      </BrowserRouter>
   </React.StrictMode>
);
