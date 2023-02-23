// React and React Router components
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Global Styles
import './styles/utils/reset.css';

// Components
import Header from './components/Header';

// Variables
const root = document.getElementById('root');

createRoot(root).render(
   <React.StrictMode>
      <Header />
      <h1>Mon route vide !</h1>
   </React.StrictMode>
);
