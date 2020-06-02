import React, { useContext } from 'react';
import FilterContext from '../context/filter/filterContext';

const FilterForm = () => {
    const filterContext = useContext(FilterContext);
    const { text, setTextFilter } = filterContext;

    const onTextChange = (e) => {
        setTextFilter(e.target.value);
    }
    return (
        <div class="input-field col s6 filter">
            <i class="material-icons prefix">search</i>
            <input type="text" value={text} onChange={onTextChange} className="input-field" placeholder="Search Blog"></input>
        </div>    
    );
}

export default FilterForm;