import React,{ useReducer } from 'react';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';

const AlertState = (props) => {
    const initialState = {
        alert : ''
    };
    const [state, dispatch] = useReducer(alertReducer, initialState);

    const setAlert = (text) => {
        dispatch({
            type: 'SET_ALERT',
            text
        });
    }

    const clearAlert = () => {
        dispatch({
            type: 'CLEAR_ALERT'
        });
    }

    return (
        <AlertContext.Provider
            value={{
                alert: state.alert,
                setAlert,
                clearAlert
            }}
        >
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState;