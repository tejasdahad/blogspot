export default (state, action) => {
    switch(action.type) {
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            };
        default:
            return state;
    }
}