import React,{ useReducer } from 'react';
import BlogContext from './blogContext';
import blogReducer from './blogReducer';
import database from '../../firebase/firebase';

const BlogState = (props) => {
    const initialState = {
        blogs: [],
        current: null,
        error: null
    };
    const [state, dispatch] = useReducer(blogReducer, initialState);

    const { blogs } = state;

    const addBlog = async (blog) => {
        await database.ref('blogs').push(blog);
        dispatch({
            type: 'ADD_BLOG',
            blog
        });
    }

    const getBlogs = async () => {
        await database.ref('blogs').once('value',(snapshot) => {
            const blogs = [];
            snapshot.forEach((childSnapshot) => {
                blogs.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch({
                type: 'GET_BLOGS',
                blogs
            });
        });

    }

    const setCurrent = (id) => {
        const blog = blogs.filter((blog) => blog.id === id)[0];
        dispatch({
            type: 'SET_CURRENT',
            blog
        });
    }

    const clearCurrent = () => {
        dispatch({
            type: 'CLEAR_CURRENT'
        });

    }

    const editBlog = async (id, updates) => {
        await database.ref(`blogs/${id}`).update({
            ...updates
        });
        dispatch({
            type: 'EDIT_BLOG',
            id,
            updates
        });
    };

    const removeBlog = async (id) => {
        await database.ref(`blogs/${id}`).remove();
        dispatch({
            type: 'REMOVE_BLOG',
            id
        });
    }

    return (
        <BlogContext.Provider
            value={{
                blogs: state.blogs,
                current: state.current,
                error: state.error,
                addBlog,
                removeBlog,
                editBlog,
                getBlogs,
                setCurrent,
                clearCurrent
            }}
        >
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogState;