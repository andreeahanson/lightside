import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { BrowserRouter } from 'react-router-dom';

const display = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(display, document.getElementById('root'));
