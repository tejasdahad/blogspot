import React, { useContext, useEffect } from 'react';
import BlogContext from '../context/blog/blogContext';
import BlogForm from './BlogForm';

const EditBlog = ({history, match}) => {
    const blogContext = useContext(BlogContext);
    const id = match.params.id;

    const { current,removeBlog,  editBlog } = blogContext;

    const onSubmit = (updates) => {
        editBlog(current.id, updates);
        history.push('/');
    }


    const onRemove = () => {
        removeBlog(current.id);
        history.push('/');
    }
    return (
        <div>
            <h1>Edit Blog</h1>
            <BlogForm blog={current} onSubmit={onSubmit} />  
            <button onClick={onRemove}>Remove Blog</button>
        </div>
    );
}

export default EditBlog;