import React, { Component, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';

export const PublicRoute = ({
    component: Component,
    ...rest
}) => {
    const authContext = useContext(AuthContext);

    const { state } = authContext;
    const isAuthenticated = !!state.uid;
    return (<Route {...rest} component={(props) => (
        !isAuthenticated ? (
            <div>
                <Component {...props} />
            </div>
        ) : (
            <Redirect to="/dashboard" />
        )
    )} />
);}

export default PublicRoute;