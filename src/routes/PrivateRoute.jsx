import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';
import { p } from 'motion/react-client';

const PrivateRoute = ({ children }) => {

    const { user, loading } = use(AuthContext)

    const location = useLocation()
    console.log(location.pathname);

    if (loading) {
        return <p>loadingg......</p>
        
    }
    if (!user) {
        return <Navigate to={'/login'} state={location.pathname}></Navigate>
    }

    return children;

};

export default PrivateRoute;