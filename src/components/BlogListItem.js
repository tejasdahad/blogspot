import React,{ useContext } from 'react';
import BlogContext from '../context/blog/blogContext';
import { Link } from 'react-router-dom';

const BlogListItem = ({blog: {id, title, body}}) => {
    const blogContext = useContext(BlogContext);

    const { setCurrent } = blogContext;

    const setCurrentBlog = () => {
        setCurrent(id);
    }

    return (
        <div>
            <Link to={`/blog/${id}`} onClick={setCurrentBlog}><h3>{title}</h3></Link>
        </div>
    );
}

export default BlogListItem;