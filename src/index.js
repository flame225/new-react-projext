import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/layout/styles.css'
import App from './app/layout/App.jsx';
import 'semantic-ui-css/semantic.min.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

