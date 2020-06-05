import React,{ Fragment, useContext, useEffect } from 'react';
import BlogContext from '../context/blog/blogContext';
import { Link } from 'react-router-dom';

const BlogItem = () => {
    const blogContext = useContext(BlogContext);

    const { current, clearCurrent } = blogContext;


    return (
        <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title"><h2>{current.title}</h2></span>
              <p>{current.body}</p>
            </div>
            <div className="card-action">
              <Link to={`/edit/${current.id}`}>Edit blog</Link>
            </div>
          </div>
        </div>
      </div>
    );
}

export default BlogItem;