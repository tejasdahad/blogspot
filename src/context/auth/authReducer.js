export default (state,action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                uid: action.uid,
                isAuthenticated: true
            };
        case 'LOGOUT':
            return {
                ...state,
                uid: '',
                isAuthenticated: false
            };
        default:
            return state;
    }
}