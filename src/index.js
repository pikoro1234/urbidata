import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Paginas/App';
import './css/style-general.css'
import './css/style-fonts.css'
import './css/style-color.css'
import './css/style-login.css'
import './js/custom.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);