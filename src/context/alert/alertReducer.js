export default (state, action) => {
    switch(action.type) {
        case 'SET_ALERT':
            return {
                ...state,
                alert: action.text
            };
        case 'CLEAR_ALERT':
            return {
                ...state,
                alert: ''
            };
        default:
            return state;
    }
}