import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import useLocation from './utils/useLocation.js';
import App from './App.jsx'
import './index.css'
import Body from './components/Body.jsx';
import ErrorPage from './components/Error.jsx'
import Services from './components/Services.jsx';
import ServicePage from './components/ServicePage.jsx';
import appStore from './utils/appStore.js'
import Cart from './components/Cart.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element:<Body/>,
      },
      {
        path: "/services",
        element: <Services/>,
      },
      {
        path: "/service/:category_slug",
        element: <ServicePage />,
      },
      {
        path: "/cart",
        element: <Cart/>,
      }
    ],
    errorElement: <ErrorPage/>,
  },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)