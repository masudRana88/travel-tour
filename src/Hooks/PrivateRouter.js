import React from 'react';
import { Navigate, Redirect, Route, useLocation } from 'react-router';
import useAuth from './useAuth';

const PrivateRouter = ({ children, ...rest }) => {
    let location = useLocation()
    let { user, isLoding } = useAuth();
    if (isLoding) {
        return (
            <div className="h-100vh">
                <div className="w-100 text-center mt-5">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>     
                </div>   
            </div>
        )
    }
    if (!user.email) {
        return <Navigate to="/login" state={{ from: location }} />;
    }
    return children;
};

export default PrivateRouter;