import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'; 
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
// import { AuthContextProvider } from "./store/auth-context";

// import { Footer } from './pages/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <AuthContextProvider>
    <Router>
      <App />
    </Router>
  // </AuthContextProvider>
);