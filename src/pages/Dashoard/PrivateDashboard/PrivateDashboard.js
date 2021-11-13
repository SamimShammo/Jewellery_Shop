import { CircularProgress } from '@mui/material';
import React from 'react';

import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const PrivateDashboard = ({ children, ...rest }) => {
    const { user, isLoading, admin } = useAuth()
    if (isLoading) {
        return <CircularProgress />
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email && !admin || admin ? (
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

export default PrivateDashboard;