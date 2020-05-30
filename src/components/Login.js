import React, { useContext } from 'react';
import AuthContext from '../context/auth/authContext';

const Login = () => {
    const authContext = useContext(AuthContext);

    const { startLogin } = authContext;
    return (
        <div>
            <button onClick={startLogin}>Login</button>
        </div>
    );
};

export default Login;