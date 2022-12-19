/* 
Nom du fichier  : index.js
Description     : Index de l'application React. 
                  Contient le root de l'application et est obligatoire dans une application React.
Auteur          : Jessica Chan
Autre étudiant  : Sebastian Perez 
*/

import './css/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
