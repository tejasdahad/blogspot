import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import BlogList from './BlogList';
import FilterForm from './FilterForm';

const DashboardPage = () => {

    /*useEffect(() => {
        if(alert) {
            M.toast({html: alert});
            clearAlert();
        }
    },[]);*/
    return (
        <div>
            DashboardPage
            <FilterForm />
            <BlogList />
            <Link to="/create">Add Blog</Link>
        </div>
    );
};

export default DashboardPage;