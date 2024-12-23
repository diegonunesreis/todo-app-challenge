import React from 'react';
import ReactDOM from 'react-dom/client';  // Importação corrigida para React 18/19
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);

serviceWorker.unregister();