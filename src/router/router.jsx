import React from 'react';
import { createBrowserRouter } from "react-router";
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import JobDetails from '../pages/Home/JobDetails';
import JobApply from '../routes/JobApply';
import PrivateRoute from '../routes/PrivateRoute';

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
        },
        {
          path : '/jobs/:id',
          element : <JobDetails/>,
          loader : ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)

        },
        {
          path : '/jobApply/:id',
          element : <PrivateRoute><JobApply/></PrivateRoute>
          // loader : ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)

        },


    ]
  },
]);

export default router;
