import React, { useContext } from 'react';
import FilterContext from '../context/filter/filterContext';

const FilterForm = () => {
    const filterContext = useContext(FilterContext);
    const { text, setTextFilter } = filterContext;

    const onTextChange = (e) => {
        setTextFilter(e.target.value);
    }
    return (
        <input type='text' placeholder='Search Blog' value={text} onChange={onTextChange} />
    );
}

export default FilterForm;