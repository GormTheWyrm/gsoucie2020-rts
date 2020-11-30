
//REDUCER
const searchReducer = (state = null, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'SET_TO':
            return action.payload
        default:
            return state;
    }
};
export default searchReducer;