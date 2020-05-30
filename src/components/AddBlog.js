import React, { useContext } from 'react';
import BlogForm from './BlogForm';
import BlogContext from '../context/blog/blogContext';

const AddBlog = (props) => {
    const blogContext = useContext(BlogContext);

    const { addBlog } = blogContext;

    const onSubmit = (blog) => {
        addBlog(blog);
        props.history.push('/');
    }
    return (
        <div>
            <h2>Add Blog</h2>
            <BlogForm onSubmit={onSubmit} />
        </div>
    )
}

export default AddBlog;