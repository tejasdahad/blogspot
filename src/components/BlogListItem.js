import React,{ useContext, Fragment } from 'react';
import BlogContext from '../context/blog/blogContext';
import moment from 'moment';
import { Link } from 'react-router-dom';

const BlogListItem = ({blog: {id, title, date}}) => {
    const blogContext = useContext(BlogContext);

    const { setCurrent } = blogContext;

    const setCurrentBlog = () => {
        setCurrent(id);
    }

    return (
        <Fragment>
            <Link className="collection-item blog__item" to={`/blog/${id}`} onClick={setCurrentBlog}>
                <h3 className="blog_item__title">{title}</h3>
                <p className="black-text blog_item__subtitle">{moment(date).format('MMMM Do, YYYY')}</p>
            </Link>
        </Fragment>
    );
}

export default BlogListItem;