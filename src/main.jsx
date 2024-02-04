import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

import ErrorPage from "./pages/error/index.jsx";
import MainPage from './pages/main/index.jsx';

const router = createBrowserRouter([
  {
    path: "/data-science-portfolio/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
]);
// import i18n (needs to be bundled ;))
import './components/language-controller/i18n.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
