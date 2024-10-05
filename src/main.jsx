import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Body from './components/Body.jsx';
import ErrorPage from './components/Error.jsx'
import Services from './components/Services.jsx';



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
      }
    ],
    errorElement: <ErrorPage/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
