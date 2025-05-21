import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading';

const PrivateRoute = ({children}) => {
    const { user, loading } = use(AuthContext);

    const location = useLocation();
    // console.log(location);
    

    if (loading) {
        return <Loading></Loading>;
    }

    // if the user is logged in
    if (user && user?.email) {
        return children;
    }

    //if the user is not logged in
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>
};

export default PrivateRoute;