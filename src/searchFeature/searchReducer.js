
//REDUCER
let reducerState = 
// [{title: 'test1'}];
{hits: [{title: "testhit"}], query: 'test' }

const searchReducer = (state = reducerState, action) => {
    if (action.type === 'SAVE_RESULTS') {
        let newState = state;
        newState.hits = action.payload.hits; //this may not work- test it
        return newState;
    }
    else if (action.type === 'SET_QUERY') {
        let newState = state;
        newState.query = action.payload; //this may not work- test it
        return newState;
    }else{
         return state;
    }
        
};
export default searchReducer;
//store is in index.js, in source folder