import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import { firebase, googleAuthProvider } from '../../firebase/firebase';

const AuthState = (props) => {
    const initialState = {
        isAuthenticated: false,
        uid: ''
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = (uid) => {
        
    }

    const startLogin = () => {
        firebase.auth().signInWithPopup(googleAuthProvider).then((result) => {
            const user = result.user;
            const uid = user.uid;
            console.log(uid);
            dispatch({
                type: 'LOGIN',
                uid
            });
        });
        
    }
    
    const logout = async () => {
        await firebase.auth().signOut();
        dispatch({
            type: 'LOGOUT'
        });
    }

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated: state.isAuthenticated,
                uid: state.uid,
                startLogin,
                login,
                logout
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
};

export default AuthState;