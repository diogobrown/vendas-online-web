import './main.css';
import { createBrowserRouter, RouterProvider, type RouteObject } from 'react-router-dom';
import { loginRoutes } from './modules/login/routes';
import { useNotification } from './shared/hooks/useNotification';

export const mainRoutes: RouteObject[] = [
  {
    path: '/',
    element: <div>Tela Principal</div>,
    errorElement: <div>Página de erro</div>,
  },
];

const router = createBrowserRouter([...loginRoutes, ...mainRoutes]);

function App() {
  const { contextHolder } = useNotification();
  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
