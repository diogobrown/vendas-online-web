import './main.css';
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import { GlobalProvider } from './shared/hooks/useGlobalContext';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
);
