import React from 'react';
import { createBrowserRouter } from "react-router";
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children : [
        {
            index : true,
            element : <Home/>
        },
        {
          path : '/register',
          element : <Register/>
        },
        {
          path : '/login',
          element : <Login/>
        }

    ]
  },
]);

export default router;
