import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import RoomsDataProvider from './provider/RoomsDataProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RoomsDataProvider>
    <RouterProvider router={router} />
    </RoomsDataProvider>
  </React.StrictMode>,
)
