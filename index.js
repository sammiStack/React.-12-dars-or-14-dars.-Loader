import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const isLoading = false

ReactDOM.render(
  <React.StrictMode>
    <App isLoading={isLoading} />
  </React.StrictMode>,
  document.getElementById('root')
);