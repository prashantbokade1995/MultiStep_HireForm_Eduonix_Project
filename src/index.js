// Add React Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// React Bootstrap Configratution 
import "../node_modules/react-bootstrap/dist/react-bootstrap"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import React from 'react';
import ReactDOM from 'react-dom/client';
import MainApp from './HireEduonixProject/Project/App/MainApp';
import './index.css';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainApp/>
  </React.StrictMode>
);


reportWebVitals();
