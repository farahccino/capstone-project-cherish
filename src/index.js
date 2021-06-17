import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './GlobalStyle';
import { BrowserRouter as Router } from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


