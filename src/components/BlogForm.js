import React, { useState, useContext, useEffect } from 'react';
import BlogContext from '../context/blog/blogContext';

const BlogForm = (props) => {
    const blogContext = useContext(BlogContext);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [error, setError] = useState('');
 
    const { current, clearCurrent } = blogContext;
    
    useEffect(() => {
        if(current) {
            setTitle(current.title);
            setBody(current.body);
        }
        console.log('Rendered');
    }, [current]);
    
    const onSubmit = (e) => {
        e.preventDefault();
        if(title === '' || body === '') {
            setError('Please enter all the fields');
        } else {
            const blog = {
                title,
                body
            };
            props.onSubmit(blog);
            console.log('submitted');
            setBody('');
            setTitle('');
        }
        
    }

    useEffect(() => {
        return () => {
            clearCurrent();
        }
    }, []);

    return (
        <form onSubmit={onSubmit}>
            {error && <p>{error}</p>}
            <input required placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input required placeholder="Blog" value={body} onChange={(e) => setBody(e.target.value)} />
            <button>{current ? 'Edit Blog': 'Add Blog' }</button>
        </form>
    );
}

BlogForm.defaultProps = {
    blog: {
        title: '',
        body: ''
    }
}

export default BlogForm;