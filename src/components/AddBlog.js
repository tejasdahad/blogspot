import React, { useContext } from 'react';
import BlogForm from './BlogForm';
import BlogContext from '../context/blog/blogContext';
import AlertContext from '../context/alert/alertContext';

const AddBlog = (props) => {
    const blogContext = useContext(BlogContext);
    const alertContext = useContext(AlertContext);

    const { addBlog } = blogContext;
    const { setAlert } = alertContext;

    const onSubmit = (blog) => {
        setAlert(`Added ${blog.title} blog`);
        addBlog(blog);
        props.history.push('/');
    }
    return (
        <div>
            <h2 className="dashboard center">Add Blog</h2>
            <div className="content-container">
            <BlogForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}

export default AddBlog;