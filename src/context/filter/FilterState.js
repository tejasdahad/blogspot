import React,{ useReducer } from 'react';
import FilterContext from './filterContext';
import filterReducer from './filterReducer';

const FilterState = (props) => {
    const initialState = {
        text: ''
    }

    const [state, dispatch] = useReducer(filterReducer, initialState);

    const setTextFilter = (text) => {
        dispatch({
            type: 'SET_TEXT',
            text
        });
    }

    return (
        <FilterContext.Provider
            value={{
                text: state.text,
                setTextFilter
            }}
        >
            {props.children}
        </FilterContext.Provider>
    )
};

export default FilterState;