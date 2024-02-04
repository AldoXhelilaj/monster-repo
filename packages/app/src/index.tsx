import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { action as AddMonster } from './components/Form';
// import { loader as LoadMonsters} from './pages/Route2';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Route1 from './pages/Route1';
import Route2 from './pages/Route2';
import Route3 from './pages/Route3';
import Root from './pages/Root';
import Homepage from './pages/Homepage';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children:
      [{
        index: true,
        element: <Homepage />,

      },
      {
        path: 'route1',
        element: <Route1 />,
        action: AddMonster

      },
      {
        path: 'route2',
        element: <Route2 />,
        // loader:LoadMonsters,
      },
      {
        path: 'route3',
        element: <Route3 />
      }
      ]
  }

])
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

