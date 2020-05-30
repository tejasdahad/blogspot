export default (state, action) => {
    switch (action.type) {
        case 'ADD_BLOG':
            return {
                ...state,
                blogs: [...state.blogs, action.blog]
            };
        case 'GET_BLOGS':
            return {
                ...state,
                blogs: action.blogs
            };
        case 'EDIT_BLOG':
            return {
                ...state,
                blogs: state.blogs.map((blog) => {
                    if(blog.id === action.id) {
                        return {
                            ...blog,
                            ...action.updates
                        }
                    } else {
                        return blog;
                    }
                })
            };
        case 'SET_CURRENT':
            return {
                ...state,
                current: action.blog
            };
        case 'CLEAR_CURRENT':
            return {
                ...state,
                current:null
            };
        case 'REMOVE_BLOG':
            return {
                ...state,
                blogs: state.blogs.filter((blog) => blog.id !== action.id)
            };
        default:
            return state;
    }
};