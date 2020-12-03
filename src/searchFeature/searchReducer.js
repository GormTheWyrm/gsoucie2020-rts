
//REDUCER
let defaultState =

    { hits: [{ title: "testhit" }], query: '', searchTerms: [], isError: false }

const searchReducer = (state = defaultState, action) => {
    console.log("ACTION RECEIVED AT REDUCER");
    console.log(action.type);
    if (action.type === 'SAVE_RESULTS') { //requires an action.payload.hits
        console.log('save results reducer');

        let newState;
        console.log('save results action');
console.log(action);
        console.log(action);
        //why is my state null!? it should not be updating before hitting this reducer...
        if (state.hits === null || state.hits === undefined) {
            newState = defaultState;
            newState.isError = true;
            // errState.searchTerms.push(action.payload.searchTerms);
            // errState.isError = true;
            //may need to make this state.hits instead of state...
            console.log('ERROR: state null or undefined');
        }
        else if (action.payload.hits === null || action.payload.hits === undefined) {
            newState = defaultState;
            newState.isError = true;
            console.log('ERROR: action null or undefined');
        }
        else {
            newState = state;
            newState.hits = action.payload.hits; //not working
            newState.isError = false;
        }
        
        // console.log('newState');
        // console.log(newState);
            return newState;
            
        }
    else if (action.type === 'SET_QUERY') {
        let newState = state;
        newState.query = action.payload; //this may not work- test it
        return newState;
    } else if (action.type === 'API_ERROR') {
        let newState = state;
        newState.searchTerms.push(action.searchTerms);
        newState.hits = [{}];
        newState.isError = true;
        return newState
    }
    else if (action.type === 'GET_DATA') {
        console.log('get data action:')
        console.log(action);
        return state //... this is sort of just a placeholder. It should probably do something...
        //all the fun stuff happens in the middleware
    }
    else {
        // console.log('something went wrong, returning state');
        // console.log(action);
        return state;
    }

};
export default searchReducer;
//store is in index.js, in source folder