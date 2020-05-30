import React,{ Fragment, useContext } from 'react';
import BlogContext from '../context/blog/blogContext';
import { Link } from 'react-router-dom';

const BlogItem = () => {
    const blogContext = useContext(BlogContext);

    const { current, clearCurrent } = blogContext;

    return (
        <Fragment>
            {current && <div>
                    <h2>{current.title}</h2>
                    <p>{current.body}</p>
            </div>}
            <Link to={`/edit/${current.id}`}>Edit Blog</Link>
        </Fragment>
    );
}

export default BlogItem;