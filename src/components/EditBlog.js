import React, { useContext, useEffect } from 'react';
import BlogContext from '../context/blog/blogContext';
import AlertContext from '../context/alert/alertContext';
import BlogForm from './BlogForm';

const EditBlog = ({history, match}) => {
    const alertContext = useContext(AlertContext);
    const blogContext = useContext(BlogContext);
    const id = match.params.id;

    const { current,removeBlog,  editBlog } = blogContext;
    const { setAlert } = alertContext;

    const onSubmit = (updates) => {
        setAlert(`Edited ${updates.title} blog`);
        editBlog(current.id, updates);
        history.push('/');
    }


    const onRemove = () => {
        setAlert(`Deleted ${current.title} blog`);
        removeBlog(current.id);
        history.push('/');
    }
    return (
        <div>
            <h1 className="dashboard center">Edit Blog</h1>
            <div className="content-container">
            <BlogForm blog={current} onSubmit={onSubmit} /> 
            <div className="form-button"> 
                <button className="btn waves-effect btn-large red waves-light" onClick={onRemove}>Remove Blog<i className="material-icons">delete</i></button>
            </div>
            </div>
        </div>
    );
}

export default EditBlog;