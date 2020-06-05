import React, { useContext, useEffect, useState } from 'react';
import BlogContext from '../context/blog/blogContext';
import BlogListItem from './BlogListItem';
import FilterContext from '../context/filter/filterContext';
import BlogFilter from '../selectors/blogFilter';
import LoadingPage from './LoadingPage';

const BlogList = () => {
    const blogContext = useContext(BlogContext);
    const filterContext = useContext(FilterContext);

    const { blogs, getBlogs } = blogContext;
    const { text } = filterContext;
    const [blogLi, setBlogLi] = useState([]);
    const [ loading, setLoading ] = useState(true);

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
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        },3000);
    },[]);
    return (
        <div className="content-container">
            <div className="collection with-header">
                { loading ? <LoadingPage /> : (
                    blogLi.length === 0 ? <p className="white-text center">No blogs. Add one.</p> :
                    (<div>
                        <h2 className="collection-header center blogs__title">Blogs</h2>
                        {blogLi.map((blog) => <BlogListItem key={blog.title} blog={blog} />)}
                    </div>)
                )
                }
            </div>
        </div>
    );
}

export default BlogList;