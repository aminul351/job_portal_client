// private route page 
// 1. !user --> login page(must use return)
// 2.  location.pathname , state={location.pathname} 


// login page
// 1. location 
// 2. navigate  
// 3. from - location.state || '/'


// navigate(from)

import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';

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