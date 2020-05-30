import React, { useContext, useEffect, useState } from 'react';
import BlogContext from '../context/blog/blogContext';
import BlogListItem from './BlogListItem';
import FilterContext from '../context/filter/filterContext';
import BlogFilter from '../selectors/blogFilter';

const BlogList = () => {
    const blogContext = useContext(BlogContext);
    const filterContext = useContext(FilterContext);

    const { blogs, getBlogs } = blogContext;
    const { text } = filterContext;
    const [blogLi, setBlogLi] = useState([]);

    useEffect(() => {
        getBlogs();
        //eslint-disable-next-line
    },[]);
    useEffect(() => {
        setBlogLi(blogs);
    },[blogs]);

    useEffect(() => {
        setBlogLi(BlogFilter(blogs, { text }));
    },[text]);
    return (
        <div>
            {blogLi.length === 0 ? <p>No blogs available. Add one.</p> : <h2>Blogs</h2>}
            {blogLi.map((blog) => <BlogListItem key={blog.title} blog={blog} />)}
        </div>
    );
}

export default BlogList;