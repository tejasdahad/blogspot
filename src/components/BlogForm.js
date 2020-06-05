import React, { useState, useContext, useEffect } from 'react';
import moment from 'moment';
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
        // eslint-disable-next-line
    }, [current]);
    
    const onSubmit = (e) => {
        e.preventDefault();
        if(title === '' || body === '') {
            setError('Please enter all the fields');
        } else {
            const date = new Date();
            const blog = {
                title,
                body,
                date
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
        <div>
            <form onSubmit={onSubmit} className="form">
                {error && <p>{error}</p>}
                <div className="input-field-1">
                    <h4>Title</h4>
                    <input className="input-field" required placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="textarea-1">
                    <h4>Blog</h4>
                    <textarea className="materialize-textarea" required placeholder="Blog" value={body} onChange={(e) => setBody(e.target.value)} />
                </div>
                <div className="form-button">
                <button className="btn waves-effect btn-large black waves-purple">{current ? 'Edit Blog': 'Add Blog' }<i class="material-icons right">send</i></button>
                </div>
            </form>
        </div>
    );
}

BlogForm.defaultProps = {
    blog: {
        title: '',
        body: ''
    }
}

export default BlogForm;