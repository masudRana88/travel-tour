import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from './useAuth';

const PrivateRouter = ({ children, ...rest }) => {
    let {user} = useAuth();
    return (
        <div>
            <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
            />
        </div>
    );
};

export default PrivateRouter;