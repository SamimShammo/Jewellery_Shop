import { CircularProgress } from '@mui/material';
import React from 'react';

import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';




const PrivateAdmin = ({ children, ...rest }) => {
    const { user, isLoading, admin } = useAuth()
    if (isLoading) {
        return <CircularProgress />
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/dashboard",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateAdmin;