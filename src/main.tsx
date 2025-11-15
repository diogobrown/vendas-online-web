import './main.css';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, type RouteObject } from 'react-router-dom';
import { loginRoutes } from './modules/login/routes';
import React from 'react';
import { GlobalProvider } from './shared/hooks/usueGlobalContext';

export const mainRoutes: RouteObject[] = [
  {
    path: '/',
    element: <div>Tela Principal</div>,
    errorElement: <div>Página de erro</div>,
  },
];

const router = createBrowserRouter([...loginRoutes, ...mainRoutes]);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  </React.StrictMode>,
);
