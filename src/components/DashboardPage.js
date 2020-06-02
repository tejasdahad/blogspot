import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import BlogList from './BlogList';
import FilterForm from './FilterForm';
import AlertContext from '../context/alert/alertContext';
import M from 'materialize-css/dist/js/materialize.min.js';

const DashboardPage = () => {
    const alertContext = useContext(AlertContext);
    const { alert, clearAlert } = alertContext;
    useEffect(() => {
        if(alert) {
            M.toast({html: alert});
            clearAlert();
        }
    },[]);
    return (
        <div>
            <div>
                <h3 className="center dashboard">Dashboard Page</h3>
            </div>
            <div className="content">
                <FilterForm />
                <BlogList />
            </div>
            <div className="fixed-action-btn">
                <Link to='/create' className="btn-floating btn-large waves-effect waves-light green"><i class="material-icons">add</i>Add Blog</Link>
            </div>
        </div>
    );
};

export default DashboardPage;